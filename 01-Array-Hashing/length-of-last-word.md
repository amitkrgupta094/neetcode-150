# [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/)

Given a string `s` consisting of words and spaces, return the length of the **last**  word in the string.

A **word**  is a maximal <div aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:rt:">substring<div style="position: fixed; z-index: 40; inset: 0px auto auto 0px; transform: translate(185px, 272px);"> consisting of non-space characters only.

**Example 1:**

```
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
```

**Example 2:**

```
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
```

**Example 3:**

```
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
```

**Constraints:**

- `1 <= s.length <= 10^4`
- `s` consists of only English letters and spaces `' '`.
- There will be at least one word in `s`.


```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sTrimmed = s.trim();
    let sTrimmedWordArray = sTrimmed.split(' ');
    let lastWord = sTrimmedWordArray[sTrimmedWordArray.length - 1].trim();
    return lastWord.length;
};
```
