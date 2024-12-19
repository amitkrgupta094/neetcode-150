# [896. Monotonic Array](https://leetcode.com/problems/monotonic-array/description/)

An array is **monotonic**  if it is either monotone increasing or monotone decreasing.

An array `nums` is monotone increasing if for all `i <= j`, `nums[i] <= nums[j]`. An array `nums` is monotone decreasing if for all `i <= j`, `nums[i] >= nums[j]`.

Given an integer array `nums`, return `true` if the given array is monotonic, or `false` otherwise.

**Example 1:**

```
Input: nums = [1,2,2,3]
Output: true
```

**Example 2:**

```
Input: nums = [6,5,4,4]
Output: true
```

**Example 3:**

```
Input: nums = [1,3,2]
Output: false
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `-10^5 <= nums[i] <= 10^5`

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    // A loop that runs till n - 1, n = length of the array
    // check the direction by checking the value nums[0] - nums[n-1]
    // inside of the loop checks if nums[i] > nums[i + 1]
    // or inside of the loop checks if nums[i] < nums[i + 1]

    let numsSize = nums.length;
    if(nums[numsSize-1] > nums[0]) {
        for(let i = 0; i < numsSize - 1; i++) {
            if(!(nums[i] <= nums[i+1])) return false;
        }
    } else {
         for(let i = 0; i < numsSize - 1; i++) {
            if(!(nums[i] >= nums[i+1])) return false;
        }
    }

    return true;
};
```
