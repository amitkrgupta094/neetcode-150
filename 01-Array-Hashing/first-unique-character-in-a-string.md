# [387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/description/)

Given a string `s`, find the **first**  non-repeating character in it and return its index. If it **does not**  exist, return `-1`.

**Example 1:**

<div class="example-block">
Input: s = "leetcode"

Output: 0

Explanation:

The character `'l'` at index 0 is the first character that does not occur at any other index.

**Example 2:**

<div class="example-block">
Input: s = "loveleetcode"

Output: 2

**Example 3:**

<div class="example-block">
Input: s = "aabb"

Output: -1

**Constraints:**

- `1 <= s.length <= 10^5`
- `s` consists of only lowercase English letters.


```js
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // Bruteforce
    // Loop 1 to fix the char
        // Loop 2 to check if char does not repeat again
            // return if it does not repeat
        // check another char and repeat the same thing again
    for(let i = 0; i < s.length; i++){
        let currentChar = s[i];
        let isCharRepeated = false;
        for(let j = 0; j < s.length; j++){
            if(i === j) continue;
            if(currentChar === s[j]) {
                isCharRepeated = true;
                break;
            };
        }

        if(!isCharRepeated) return i;
    }
}
```
