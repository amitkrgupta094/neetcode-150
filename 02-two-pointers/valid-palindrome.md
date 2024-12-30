# [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/)

A phrase is a **palindrome**  if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a **palindrome** , or `false` otherwise.

**Example 1:**

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

**Example 2:**

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

**Example 3:**

```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

**Constraints:**

- `1 <= s.length <= 2 * 10^5`
- `s` consists only of printable ASCII characters.


```js
/**
 * @param {string} s
 * @return {boolean}
 */

// Tc: O(length of s), Sc: O(lenght of s)
var isPalindrome = function (s) {
    let cleanedStr = '';
    let reversedCleanedStr = '';

    const isCharLowerCaseAlphabet = (c) => c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122;
    const isCharNumber = (c) => c >= '0' && c <= '9';

    for (let i = 0; i < s.length; i++) {
        let loweredCaseChar = s[i].toLowerCase();
        if (isCharLowerCaseAlphabet(loweredCaseChar) || isCharNumber(loweredCaseChar)) {
            cleanedStr = cleanedStr + loweredCaseChar;
            reversedCleanedStr = loweredCaseChar + reversedCleanedStr;
        }
    };

    return cleanedStr === reversedCleanedStr;
};
```
