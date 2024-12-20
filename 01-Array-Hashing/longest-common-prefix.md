# [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

**Example 2:**

```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Constraints:**

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters.


```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // sort the array with ascending order of length
    strs.sort((a, b) => a.length - b.length);
    let smallestString = strs[0];
    let smallestStringArray = smallestString.split('');
    while( smallestStringArray.length > 0) {
        let isPrefix = true;
        for(let i = 1; i < strs.length; i++){
            if(strs[i].substr(0, smallestStringArray.length) == smallestString) continue;
            else {
                isPrefix = false;
                break;
            }
        }


        if(!isPrefix) {
            smallestStringArray.pop();
            smallestString = smallestStringArray.join('')
        } else {
            return smallestStringArray.join('');
        }
    }

    return "";
};
```