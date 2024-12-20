# [205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/description/)

Given two strings `s` and `t`, determine if they are isomorphic.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

<div class="example-block">
Input: s = "egg", t = "add"

Output: true

Explanation:

The strings `s` and `t` can be made identical by:

- Mapping `'e'` to `'a'`.
- Mapping `'g'` to `'d'`.

**Example 2:**

<div class="example-block">
Input: s = "foo", t = "bar"

Output: false

Explanation:

The strings `s` and `t` can not be made identical as `'o'` needs to be mapped to both `'a'` and `'r'`.

**Example 3:**

<div class="example-block">
Input: s = "paper", t = "title"

Output: true

**Constraints:**

- `1 <= s.length <= 5 * 10^4`
- `t.length == s.length`
- `s` and `t` consist of any valid ascii character.


```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
     if(s.length !== t.length) return false;
    let tempMap = {};


    for(let i = 0; i < t.length; i++){
        if(!tempMap[t[i]]) tempMap[t[i]] = [s[i]]
        else tempMap[t[i]].push(s[i])
    }


   const patternMappedValues  = Object.values(tempMap);

   let container = [];
   for(let j = 0; j < patternMappedValues.length; j++){
     let baseItem = patternMappedValues[j][0];
     if(!baseItem || container.includes(baseItem)) return false;
     for(let k = 1; k < patternMappedValues[j].length; k++){
        if(patternMappedValues[j][k] !== baseItem) return false
     }
     container.push(baseItem);
   }

    return true;
};
```
