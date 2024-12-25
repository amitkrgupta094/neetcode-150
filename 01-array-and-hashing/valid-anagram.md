# [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/description/)

Given two strings `s` and `t`, return `true` if `t` is an <div aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:rt:">anagram<div style="position: fixed; z-index: 40; inset: 0px auto auto 0px; transform: translate(367px, 214px);"> of `s`, and `false` otherwise.

**Example 1:**

<div class="example-block">
Input: s = "anagram", t = "nagaram"

Output: true

**Example 2:**

<div class="example-block">
Input: s = "rat", t = "car"

Output: false

**Constraints:**

- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters.

**Follow up:**  What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

```js

// Bruteforce - 34/51
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    for(let i = 0; i < s.length; i++){
        let sCharFrequency = 0;
        let tCharFrequency = 0;
        for(let j = 0; j < s.length; j++){
            if(s[j] === s[i]) sCharFrequency++;
            if(t[j] === s[i]) tCharFrequency++;
        }
        if(sCharFrequency !== tCharFrequency) return false;
    }
    return true;
};
```

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const sCharFrequency = {};
    const tCharFrequency = {};

    for(let i = 0; i < s.length; i++){
        if(!sCharFrequency[s[i]]) sCharFrequency[s[i]] = 1;
        else sCharFrequency[s[i]]++;
    }

    for(let i = 0; i < t.length; i++){
        if(!tCharFrequency[t[i]]) tCharFrequency[t[i]] = 1;
        else tCharFrequency[t[i]]++;
    }


    for(let key in tCharFrequency) {
        if(tCharFrequency[key] !== sCharFrequency[key]) return false;
    }

    return true;
};
```
