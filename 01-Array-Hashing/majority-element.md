# [169. Majority Element](https://leetcode.com/problems/majority-element/description/)

Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

**Example 1:**

```
Input: nums = [3,2,3]
Output: 3
```

**Example 2:**

```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 5 * 10^4`
- `-10^9 <= nums[i] <= 10^9`

**Follow-up:**  Could you solve the problem in linear time and in `O(1)` space?


```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    // Define the hashmap to record count of unique numbers
    let numsCounter = {};

    // Counter hash map logic
    for(let i = 0; i < nums.length; i++){
        if(!numsCounter[nums[i]]) numsCounter[nums[i]] = 1;
        else numsCounter[nums[i]] += 1;
    }


    // Finding the element with max count and above n/2
    let maxNum = {num: -Infinity, count: -Infinity}
    for(let key in numsCounter){
        let count = numsCounter[key]
        if(count > maxNum.count) maxNum = {num: key, count}
    }

    return Number(maxNum.num)
};
```
