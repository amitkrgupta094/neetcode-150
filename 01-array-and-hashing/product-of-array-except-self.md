# [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description/)

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed**  to fit in a **32-bit**  integer.

You must write an algorithm that runs in`O(n)`time and without using the division operation.

**Example 1:**

```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

**Example 2:**

```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

**Constraints:**

- `2 <= nums.length <= 10^5`
- `-30 <= nums[i] <= 30`
- The product of any prefix or suffix of `nums` is **guaranteed**  to fit in a **32-bit**  integer.

**Follow up:** Can you solve the problem in `O(1)`extraspace complexity? (The output array **does not**  count as extra space for space complexity analysis.)


```js
// Bruteforce: TLE
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let outputArr = [];

    for(let i = 0; i < nums.length; i++){
        let product = 1;
        for(let j = 0; j < nums.length; j++){
            if(i === j) continue;
            product *= nums[j]
        }
        outputArr.push(product);
    }

    return outputArr;
};
```

```JS
// Using prefix and suffix from the hint
// TC: O(n), SC: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let outputArr = [];
    let prefixArr = prefixProduct(nums);
    let suffixArr = suffixProduct(nums);

    for(let i = 0; i < nums.length; i++){
        let prefixItemVal = 1;
        let suffixItemVal = 1;
        if(prefixArr[i-1] !== undefined) prefixItemVal = prefixArr[i-1];
        if(suffixArr[i+1] !== undefined) suffixItemVal = suffixArr[i+1];
        nums[i] = prefixItemVal * suffixItemVal;
    }

    return nums;


    function suffixProduct(arr){
        let size = arr.length;
        let product = 1;
        let sArr = [];
        for(let i = size-1; i >= 0; i--) {
            product = product * arr[i];
            sArr[i] = product;
        }
        return sArr;
    }

    function prefixProduct(arr){
        let size = arr.length;
        let product = 1;
        let pArr = [];
        for(let i = 0; i < size; i++) {
            product = product * arr[i];
            pArr[i] = product;
        }
        return pArr;
    }
};
```
