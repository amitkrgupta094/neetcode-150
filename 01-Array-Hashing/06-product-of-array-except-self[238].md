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

```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Bruteforce
    // Create an empty integer[]
    // Loop through the nums to select the element
    // Loop through the nums again to get product of every number except the num
        // if any number is zero, push the zero right away
        // else do operation to get product and push the result inside of integer[]
    // return the integer[]

    let productArr = [];
    for(let i = 0; i < nums.length; i++){
        let selectedNum = nums[i];
        let product = 1;
        for(let j = 0 ; j < nums.length; j++) {
            if(j === i) continue;
            product *= nums[j]
        }
        productArr.push(product)
    }
    return productArr;
};
```

```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // get product of all elements except the zeros
    // get count of zeros
    // if count of zeros is zero then
    // create an hashmap with key equal to num and product / num (num not zero)
    // if count of zero >= 2 then every elements product value will be 0
    // if count of zero is equal to 1, then every product be zero except the zero with product of elements
    // return the array created using the hashmap

    const answer = [];
    let product =  1;
    let zeroCount = 0;


    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) product *= nums[i]
        else zeroCount += 1;
    }

    if(zeroCount >= 2) {
        for(let j = 0; j < nums.length; j++){
            answer.push(0);
        }
    }else if(zeroCount == 1) {
        for(let j = 0; j < nums.length; j++){
            if(nums[j] !== 0) answer.push(0)
            else answer.push(product);
        }
    } else {
         for(let k = 0; k < nums.length; k++){
           answer.push(product/nums[k]);
         }
    }


    return answer;

};
```
