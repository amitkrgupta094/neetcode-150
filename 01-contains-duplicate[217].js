/*
URL: https://leetcode.com/problems/contains-duplicate/description/

217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array,
 and return false if every element is distinct.

 
Example 1:
Input: nums = [1,2,3,1]
Output: true

Explanation:
The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1,2,3,4]
Output: false

Explanation:
All elements are distinct.

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

 
Constraints:
	1 <= nums.length <= 105
	-109 <= nums[i] <= 109
*/



/**
 * @param {number[]} nums
 * @return {boolean}
 */


// Bruteforce Approach - This solution hits TLE
var containsDuplicate = function(nums) {
    // 1. Iterate through the nums array and select an element one by one
    // 2. Iterate through the nums array but with index + choosen index of top iteration
    // 3. Check if selected element from iteration 1 is inside of iteration 2 elements
    // 4. If element is found? return the True boolean
    // 5. If element is not found? return the False boolean

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) return true;
        }
    }

    return false;
};

/* =================================================================================================== */

/**
 * @param {number[]} nums
 * @return {boolean}
 */


// Hashmap Approach
var containsDuplicate = function(nums) {
    // Create an hashmap of value and it's count from the numbs array
    // while creating the hashmap if any value occurs more than one?
    // return true
    // keep building the hashmap & check
    // If no value has more than 1 occurance, return false

    let hashMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(hashMap.has(nums[i])) return true
        hashMap.set(nums[i], 1)
    }

    return false;
};
