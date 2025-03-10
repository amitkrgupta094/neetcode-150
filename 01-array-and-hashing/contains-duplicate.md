# [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)

Given an integer array `nums`, return `true` if any value appears **at least twice**  in the array, and return `false` if every element is distinct.

**Example 1:**

<div class="example-block">
Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

**Example 2:**

<div class="example-block">
Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

**Example 3:**

<div class="example-block">
Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

**Constraints:**

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`


```js
// bruteforce: fails with TLE
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]) return true;
        }
    }
    return false;
};
```


```js
// Using hashmap nums counter
var containsDuplicate = function(nums) {
   let numsCounter = {};
   for(let i = 0; i < nums.length; i++){
    if(!numsCounter[nums[i]]) numsCounter[nums[i]] = 1;
    else return true
   }

   return false;
};
```


```js
// Using map data structure
// TC: O(n), SC: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let countMap = new Map();
    for(let i of nums) {
        if(countMap.has(i)) return true
        else countMap.set(i, 1)
    }
    return false;
};
```
