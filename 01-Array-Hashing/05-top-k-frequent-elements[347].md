# [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/description/)

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in **any order** .

**Example 1:**

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

**Example 2:**

```
Input: nums = [1], k = 1
Output: [1]
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `k` is in the range `[1, the number of unique elements in the array]`.
- It is **guaranteed**  that the answer is **unique** .

**Follow up:**  Your algorithm's time complexity must be better than `O(n log n)`, where n is the array's size.


```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
     // Create a hashmap that lists frequency of integers num[]
    // define an array: frequentArr[]
    // Get ordered key array where key will be sorted based on frequency
    // in the hashmap
    // Iterate k times and push first k elements from ordered key array
    // to the frequentArr[]
    // return the frequentArr[]
    const frequencyCounter = new Map();
    for(let i = 0 ; i < nums.length; i++) {
        let number = nums[i];
        if(!frequencyCounter.has(number)) frequencyCounter.set(number, 1);
        frequencyCounter.set(number, frequencyCounter.get(number) + 1)
    };

    const freqKeys = Array.from(frequencyCounter.keys());
    freqKeys.sort((a, b) => frequencyCounter.get(b) - frequencyCounter.get(a))

    return freqKeys.slice(0, k);
};
```
