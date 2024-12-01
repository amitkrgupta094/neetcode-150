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
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    // Time Complexity: O(Log(n))
    // Space Complexity: O(1)
    let start = 0;
    let end = nums.length - 1;
    let targetFirstIndex = -1;
    let targetLastIndex = -1;

    while(end >= start) {
        let middle = Math.floor((start + end)/2);
        if(target === nums[middle]) {
            targetFirstIndex = middle;
            end = middle - 1;
        } else if ( target < nums[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }


    start = 0;
    end = nums.length - 1;

    while(end >= start) {
        let middle = Math.floor((start + end)/2);
        if(target === nums[middle]) {
            targetLastIndex = middle;
            start = middle + 1;
        } else if ( target < nums[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return [targetFirstIndex, targetLastIndex]


};
```
