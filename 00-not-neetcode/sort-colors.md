# [75. Sort Colors](https://leetcode.com/problems/sort-colors/description/?envType=problem-list-v2&envId=array)

Given an array `nums` with `n` objects colored red, white, or blue, sort them **<a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a> ** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

**Example 1:**

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

**Example 2:**

```
Input: nums = [2,0,1]
Output: [0,1,2]
```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` is either `0`, `1`, or `2`.

**Follow up:** Could you come up with a one-pass algorithm using onlyconstant extra space?

```js
var sortColors = function(arr) {
  // your code here
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps =  true;
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j + 1]){
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}
```
