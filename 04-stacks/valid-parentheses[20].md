# [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

**Example 1:**

<div class="example-block">
Input: s = "()"

Output: true

**Example 2:**

<div class="example-block">
Input: s = "()[]{}"

Output: true

**Example 3:**

<div class="example-block">
Input: s = "(]"

Output: false

**Example 4:**

<div class="example-block">
Input: s = "([])"

Output: true

**Constraints:**

- `1 <= s.length <= 10^4`
- `s` consists of parentheses only `'()[]{}'`.

```

// Bruteforce: Does not work, passes 83/100 tests
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {


    // Bruteforce method
    // Map to maintain the correct parens mapping
    if(s.length % 2 === 1) return false;


    const parensHashMap = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };




    if(parensHashMap[s[0]] === s[1]) {
        for(let i = 0; i < s.length; i = i + 2) {
            if(parensHashMap[s[i]] !== s[i + 1]) return false
        }
    }
    else {
        let sLen = s.length;
        for(let i = 0; i < s.length / 2; i++) {
            console.log()
            if(parensHashMap[s[i]] !== s[sLen - (i + 1)]) return false
        }
    }


    return true;

};


```






```
Approach: use stack, solved this using the hints
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    // Array as stack
    const openingBraces = "{([";
    const bracesMap = {
        "}" : "{",
        "]": "[",
        ")": "("
    }
    let stack = [];

    for(let char of s){
        if(openingBraces.includes(char)) stack.push(char)
        else {
            if(bracesMap[char] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};
```
