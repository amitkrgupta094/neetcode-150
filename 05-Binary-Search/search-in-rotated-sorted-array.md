# [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/)

There is an integer array `nums` sorted in ascending order (with **distinct**  values).

Prior to being passed to your function, `nums` is **possibly rotated**  at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (**0-indexed** ). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index `3` and become `[4,5,6,7,0,1,2]`.

Given the array `nums` **after**  the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

**Example 3:**

```
Input: nums = [1], target = 0
Output: -1
```

**Constraints:**

- `1 <= nums.length <= 5000`
- `-10^4 <= nums[i] <= 10^4`
- All values of `nums` are **unique** .
- `nums` is an ascending array that is possibly rotated.
- `-10^4 <= target <= 10^4`


```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let N = nums.length;
    let start = 0;
    let end = N - 1;
    let indexOfMinmNumber = -1;

    if(N === 1 && nums[0] === target) return 0;



    while(end >= start) {
        let mid = Math.floor((start + end)/2);
        let next = (mid + 1) % N;
        let prev = (mid - 1 + N) % N;

         // If array is already sorted
        if(nums[start] <= nums[end]){
            indexOfMinmNumber = start;
            break;
        }


        if(nums[mid] <= nums[next] && nums[mid] <= nums[prev]) {
            indexOfMinmNumber = mid;
            break;
        }
        else if (nums[mid] >= nums[start]) start = mid + 1;
        else if(nums[mid] <= nums[end]) end = mid - 1
    }

    if(nums[indexOfMinmNumber] === target) return indexOfMinmNumber;
    const bsResult1 = genericBinarySearch(nums, 0, indexOfMinmNumber-1, target)
    const bsResult2 = genericBinarySearch(nums, indexOfMinmNumber+1, N - 1, target)

    function genericBinarySearch(arr, start, end, target){
        while(end >= start) {
            let mid = Math.floor((start + end)/2);
            if(arr[mid] === target) return mid;
            else if(arr[mid] >= target) end = mid - 1;
            else start = mid + 1;
        }
        return -1;
    }

    if(bsResult1 !== -1) return bsResult1;
    if(bsResult2 !== -1) return bsResult2;
    return -1;
};
```
