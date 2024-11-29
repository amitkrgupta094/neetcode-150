# [150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/description/)

You are given an array of strings `tokens` that represents an arithmetic expression in a <a href="http://en.wikipedia.org/wiki/Reverse_Polish_notation" target="_blank">Reverse Polish Notation</a>.

Evaluate the expression. Return an integer that represents the value of the expression.

**Note**  that:

- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
- Each operand may be an integer or another expression.
- The division between two integers always **truncates toward zero** .
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a **32-bit**  integer.

**Example 1:**

```
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```

**Example 2:**

```
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```

**Example 3:**

```
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

**Constraints:**

- `1 <= tokens.length <= 10^4`
- `tokens[i]` is either an operator: `"+"`, `"-"`, `"*"`, or `"/"`, or an integer in the range `[-200, 200]`.

```
I wanted to understand How RPN works and found the great write up an user on SO
Link - https://stackoverflow.com/questions/2722889/understanding-reverse-polish-notation-for-homework-assignment


## Bruteforce approach

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // Using the article's algorithm

    // Start looking for the first operator
    // Once found, take two items before it and operate on them
    // remove the two operands and the operand from the array
    // keep doing it until array has one element
    const operators = "+-*/";
    let i = 0;

    function massOperator(a, b, op) {
        a = parseInt(a);
        b = parseInt(b);
        if(op === '+') return a + b;
        if(op === '-') return a - b;
        if(op === '*') return a * b;
        if(op === '/') return a / b;
    }
    while(tokens.length !== 1) {
        if(operators.includes(tokens[i])) {
            tokens.splice(i-2, 3, massOperator(tokens[i-2],tokens[i-1], tokens[i]));
            i = i - 3;
        } else {
            i = i + 1;
        }

        continue;
    }

    return parseInt(tokens[0])
};

```
