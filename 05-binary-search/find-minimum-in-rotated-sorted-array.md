# [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/)

Suppose an array of length `n` sorted in ascending order is **rotated**  between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:

- `[4,5,6,7,0,1,2]` if it was rotated `4` times.
- `[0,1,2,4,5,6,7]` if it was rotated `7` times.

Notice that **rotating**  an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` of **unique**  elements, return the minimum element of this array.

You must write an algorithm that runs in`O(log n) time`.

**Example 1:**

```
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
```

**Example 3:**

```
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 5000`
- `-5000 <= nums[i] <= 5000`
- All the integers of `nums` are **unique** .
- `nums` is sorted and rotated between `1` and `n` times.


```js
/**
 * @param {number[]} nums
 * @return {number}
 */

// TC: O(n), SC: O(1)
var findMin = function(nums) {
    let min = Infinity;
    let minIndex = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < min) {
            min = nums[i];
            minIndex = i;
        }
    }

    return min;
};
```


```js
// TC: logn, SC: O(1)
var findMin = function(nums) {
   let N = nums.length;
   let start = 0;
   let end = N - 1;


   while(start <= end) {
    let mid = Math.floor((start + end) / 2);

    // calculate next and previous elements
    let next = (mid + 1) % N;
    let prev = (mid + N - 1) % N;

    // This can happen if you've minm number at starting index
    if(nums[start] <= nums[end]) return nums[start];

    // check if number is lesser than both of its neighbour
    if((nums[mid] < nums[next]) && (nums[mid] < nums[prev])) return nums[mid];
    // if it is higher than start, meaning array is not sorted on right side
    // hence go to that side
    else if (nums[start] <= nums[mid] ) {
        start = mid + 1;
    } else {
        // otherwise go to the left side, discard right side space
        end = mid - 1;
    }
   }
   return -1;
};
```
