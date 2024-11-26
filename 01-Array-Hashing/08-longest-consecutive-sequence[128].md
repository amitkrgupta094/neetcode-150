# [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/)

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in`O(n)`time.

**Example 1:**

```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is `[1, 2, 3, 4]`. Therefore its length is 4.
```

**Example 2:**

```
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```

**Constraints:**

- `0 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;

    // sort the number in increasing manner
    nums = nums.sort((a, b) => a - b);
    let countConseqNums = [];
    let count = 1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i + 1] === nums[i]) continue;
        if(nums[i + 1] === nums[i] + 1 ) {
            count++;
        } else {
            countConseqNums.push(count);
            count = 1;
        }
    }

    return Math.max(...countConseqNums);
};
```
