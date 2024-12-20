# [290. Word Pattern](https://leetcode.com/problems/word-pattern/description/)

Given a `pattern` and a string `s`, find if `s`follows the same pattern.

Here <b>follow</b> means a full match, such that there is a bijection between a letter in `pattern` and a <b>non-empty</b> word in `s`. Specifically:

- Each letter in `pattern` maps to **exactly**  one unique word in `s`.
- Each unique word in `s` maps to **exactly**  one letter in `pattern`.
- No two letters map to the same word, and no two words map to the same letter.

**Example 1:**

<div class="example-block">
Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

- `'a'` maps to `"dog"`.
- `'b'` maps to `"cat"`.

**Example 2:**

<div class="example-block">
Input: pattern = "abba", s = "dog cat cat fish"

Output: false

**Example 3:**

<div class="example-block">
Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false

**Constraints:**

- `1 <= pattern.length <= 300`
- `pattern` contains only lower-case English letters.
- `1 <= s.length <= 3000`
- `s` contains only lowercase English letters and spaces `' '`.
- `s` **does not contain**  any leading or trailing spaces.
- All the words in `s` are separated by a **single space** .

```js
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const sArr = s.split(' ');
    if(sArr.length !== pattern.length) return false;
    let tempMap = {};

    console.log(sArr, 'sArr')

    for(let i = 0; i < pattern.length; i++){
        if(!tempMap[pattern[i]]) tempMap[pattern[i]] = [sArr[i]]
        else tempMap[pattern[i]].push(sArr[i])
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
