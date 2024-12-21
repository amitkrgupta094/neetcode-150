# [645. Set Mismatch](https://leetcode.com/problems/set-mismatch/description/)

You have a set of integers `s`, which originally contains all the numbers from `1` to `n`. Unfortunately, due to some error, one of the numbers in `s` got duplicated to another number in the set, which results in **repetition of one**  number and **loss of another**  number.

You are given an integer array `nums` representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

**Example 1:**

```
Input: nums = [1,2,2,4]
Output: [2,3]
```

**Example 2:**

```
Input: nums = [1,1]
Output: [1,2]
```

**Constraints:**

- `2 <= nums.length <= 10^4`
- `1 <= nums[i] <= 10^4`

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    // Create a Hashmap and find the repeated number
    // Add 1 to it and return it

   // Create the number counter
    let countMap = {};
    for(let i = 0; i < nums.length; i++){
        if(!countMap[nums[i]]) countMap[nums[i]] = 1;
        else countMap[nums[i]] ++;
    }


    // Find the repeatd number
    let repatedNumber;
    for(let key in countMap){
        if(countMap[key] > 1) {
            repatedNumber = Number(key)
        }
    }

    return [repatedNumber, repatedNumber + 1]
};
```
