# [680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/description/)

Given a string `s`, return `true` if the `s` can be palindrome after deleting **at most one**  character from it.

**Example 1:**

```
Input: s = "aba"
Output: true
```

**Example 2:**

```
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
```

**Example 3:**

```
Input: s = "abc"
Output: false
```

**Constraints:**

- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters.


```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;

    while(end >= start){
        if(numbers[start] + numbers[end] > target) end--;
        else if(numbers[start] + numbers[end] < target) start++;
        else return [start + 1, end +1]
    }
};
```
