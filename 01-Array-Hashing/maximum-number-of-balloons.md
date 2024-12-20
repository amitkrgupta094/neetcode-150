# [1189. Maximum Number of Balloons](https://leetcode.com/problems/maximum-number-of-balloons/description/)

Given a string `text`, you want to use the characters of `text` to form as many instances of the word **"balloon"**  as possible.

You can use each character in `text` **at most once** . Return the maximum number of instances that can be formed.

**Example 1:**

**<img alt="" src="https://assets.leetcode.com/uploads/2019/09/05/1536_ex1_upd.JPG" style="width: 132px; height: 35px;">**

```
Input: text = "nlaebolko"
Output: 1
```

**Example 2:**

**<img alt="" src="https://assets.leetcode.com/uploads/2019/09/05/1536_ex2_upd.JPG" style="width: 267px; height: 35px;">**

```
Input: text = "loonbalxballpoon"
Output: 2
```

**Example 3:**

```
Input: text = "leetcode"
Output: 0
```

**Constraints:**

- `1 <= text.length <= 10^4`
- `text` consists of lower case English letters only.

**Note:**  This question is the same as <a href="https://leetcode.com/problems/rearrange-characters-to-make-target-string/description/" target="_blank"> 2287: Rearrange Characters to Make Target String.</a>

```js
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let balloonMap = {};
    let tempMap = {};
    let BALLOON = "balloon";

    for(let i = 0; i < text.length; i++){
        if(!tempMap[text[i]]) tempMap[text[i]] = 1;
        else tempMap[text[i]]++;
    }


    for(let j = 0; j < BALLOON.length; j++ ){
        balloonMap[BALLOON[j]] = tempMap[BALLOON[j]]
    }

    console.log(balloonMap, 'baloonMap')

    let count = 0;

    if(!( balloonMap['b'] && balloonMap['a'] && balloonMap['l'] && balloonMap['o'] && balloonMap['n'])) return count;

    while((balloonMap['b'] >= 1 && balloonMap['a'] >= 1 && balloonMap['l'] >= 2 && balloonMap['o'] >= 2 && balloonMap['n'] >= 1)) {
        balloonMap['b']--;
        balloonMap['a']--;
        balloonMap['l'] -= 2;
        balloonMap['o'] -= 2;
        balloonMap['n']--

        count++;
    }

    return count;
};
```
