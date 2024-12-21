# [349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/description/)

Given two integer arrays `nums1` and `nums2`, return an array of their <div aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:rt:">intersection<div style="position: fixed; z-index: 40; inset: 0px auto auto 0px; transform: translate(479px, 182px);">. Each element in the result must be **unique**  and you may return the result in **any order** .

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // Bruteforce
    let intersectionArr = [];
    for(let i = 0; i < nums1.length; i++){
        if(nums2.includes(nums1[i]) && !intersectionArr.includes(nums1[i])) {
            intersectionArr.push(nums1[i])
        }
    }
    return intersectionArr;
};
```
