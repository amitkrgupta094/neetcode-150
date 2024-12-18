# [448. Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/)

Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range `[1, n]` that do not appear in `nums`.

**Example 1:**

```
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
```

**Example 2:**

```
Input: nums = [1,1]
Output: [2]
```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 10^5`
- `1 <= nums[i] <= n`

**Follow up:**  Could you do it without extra space and in `O(n)` runtime? You may assume the returned list does not count as extra space.


```js
// Bruteforce: 33/35 TLE
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let output = [];
    let numsSize = nums.length;

    for(let i = 1; i < numsSize + 1; i++){
        if(!nums.includes(i)) output.push(i)
    }

    return output;
};
```

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let output = [];
    let numsSize = nums.length;

    nums.sort((a, b) => a - b);
    nums = [...new Set(nums)]
    const binarySearch = (arr, target) => {
        let i = 0;
        let j = arr.length - 1;

        while(i <= j) {
            let mid = Math.ceil((i + j) / 2);
            if(arr[mid] === target) return true;
            else if (arr[mid] < target) i = mid + 1;
            else j = mid - 1
        }
        return false;
    }

    for(let i = 1; i < numsSize + 1; i++){
        if(!binarySearch(nums,i)) output.push(i)
    }

    return output;
};
```
