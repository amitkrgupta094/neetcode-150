# [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/)

Given an integer array `nums` and an integer `k`, return `true` if there are two **distinct indices**  `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

**Example 1:**

```
Input: nums = [1,2,3,1], k = 3
Output: true
```

**Example 2:**

```
Input: nums = [1,0,1,1], k = 1
Output: true
```

**Example 3:**

```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- `0 <= k <= 10^5`


```js

// TLE: 48 / 59
// TC: O(n^2), SC: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;
            if (nums[i] === nums[j] && (Math.abs(i - j) <= k)) {
                return true;
            }
        }
    }
 return false;
};
```
