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
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  // Take two pointers
  // ptr1 = 0, ptr2 = last index of s
  // atmost count = 0

  // loop which checks if pointer 1 less than or equal to pointer 2
     // check atmost count is less than euqal to 1, if not return false
     // if character at ptr1 is not same as character at ptr2 and
       // decrement 1 from end
       // increment 1 to atmost count
    // else
      // increment 1 to start
      // decerement 1 from the end

    // return true

    let start = 0;
    let end = s.length - 1;
    let atMostCountFromEnd = 0;
    let atMostCountFromStart = 0;

    while(end >= start) {
        if(s[start] !== s[end]) {
            end--;
            atMostCountFromEnd++;

            if(atMostCountFromEnd > 1) break;
        }
        else {
            start++;
            end--;
        }
    }


    start = 0;
    end = s.length - 1;
    while(end >= start) {
        if(s[start] !== s[end]) {
            start++;
            atMostCountFromStart++;

            if(atMostCountFromStart > 1) break;
        }
        else {
            start++;
            end--;
        }
    }

   return !(atMostCountFromEnd > 1 && atMostCountFromStart > 1)
};
```
