# [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You mustwrite an algorithm with`O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

**Example 2:**

```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

**Example 3:**

```
Input: nums = [], target = 0
Output: [-1,-1]
```

**Constraints:**

- `0 <= nums.length <= 10^5`
- `-10^9<= nums[i]<= 10^9`
- `nums` is a non-decreasing array.
- `-10^9<= target<= 10^9`


```js
// TC: O(n)
// SC: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = -1;

    while (end >= start) {
        mid = Math.floor((start + end) / 2)
        if (nums[mid] === target) {
            break;
        }

        if (nums[mid] > target) end = mid - 1;
        else start = mid + 1;
    }

    if (mid === -1) return [-1, -1]

    let firstOccurence = -1;
    let lastOccurence = -1;

    for (let i = mid; i >= 0; i--) {
        if (nums[i] !== target) break;
        firstOccurence = i;
    }


    for (let i = mid; i < nums.length; i++) {
        if (nums[i] !== target) break;
        lastOccurence = i;
    }

    return [firstOccurence, lastOccurence]
};
```