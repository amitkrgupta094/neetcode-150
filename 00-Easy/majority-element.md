# [169. Majority Element](https://leetcode.com/problems/majority-element/description/?envType=problem-list-v2&envId=array)

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
    let size = nums.length / 2;
    const numsMap = new Map();

    for(let char of nums){
        if(!numsMap.has(char)) numsMap.set(char, 1);
        else numsMap.set(char, numsMap.get(char) + 1)
    }
    console.log(numsMap)

    let majEl;
    numsMap.forEach((v, k) => {
        if(v > size) majEl = Number(k)
    });

    return majEl;
};
```
