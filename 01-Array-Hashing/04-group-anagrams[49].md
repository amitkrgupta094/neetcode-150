# [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)

Given an array of strings `strs`, group the <div aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:ro:">anagrams<div style="position: fixed; z-index: 40; inset: 0px auto auto 0px; transform: translate(316px, 214px);"> together. You can return the answer in **any order** .

**Example 1:**

<div class="example-block">
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

- There is no string in strs that can be rearranged to form `"bat"`.
- The strings `"nat"` and `"tan"` are anagrams as they can be rearranged to form each other.
- The strings `"ate"`, `"eat"`, and `"tea"` are anagrams as they can be rearranged to form each other.

**Example 2:**

<div class="example-block">
Input: strs = [""]

Output: [[""]]

**Example 3:**

<div class="example-block">
Input: strs = ["a"]

Output: [["a"]]

**Constraints:**

- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

```
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Array to push grouped anagrams
    let groupedStrs = [];

    // Create an hashmap of common anagram words
    // key - sorted anagram
    // value - array of original anagrams
    let groupAnagramHashMap = {};

    // Loop over the strs - O(n) * (O(n) + 1)
    for(let i = 0; i < strs.length; i++) {
        // sort the anagram in lexical form
        let sortedString = strs[i].split('').sort().join('');

        // check if this key already exists, if not add the unsorted anagram to array
        if(!groupAnagramHashMap[sortedString]) {
           groupAnagramHashMap[sortedString] = [strs[i]]
        } else {
            // if it exists then add the unsorted anagram against sorted key
            groupAnagramHashMap[sortedString].push(strs[i])
        }
    }


   // Loop over the hashmap and collect the grouped anagrams
   // inside of groupedstrs Array
    for(let key in groupAnagramHashMap){
        groupedStrs.push(groupAnagramHashMap[key])
    }

    // Return the groupedStrs Array
    return groupedStrs;

};
```
