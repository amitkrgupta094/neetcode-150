# [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/description/?envType=problem-list-v2&envId=plakya4j)

You are given an `m x n` integer matrix `matrix` with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer `target`, return `true` if `target` is in `matrix` or `false` otherwise.

You must write a solution in `O(log(m * n))` time complexity.

**Example 1:**
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat.jpg" style="width: 322px; height: 242px;">

```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
```

**Example 2:**
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg" style="width: 322px; height: 242px;">

```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
```

**Constraints:**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 100`
- `-10^4 <= matrix[i][j], target <= 10^4`


```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // One Solution
    // Create a new array that concatenates all the array
    // Apply binary search to find the target element
    // If target is found
        // return true
    // else
        // return false




    // Second Solution
    // Apply binary search on 2-d array and find the array - to find the array
    // if array is not found
        // return false
    // else
        // return true
    // Apply binary search on found array to find the target element

    let i = 0;
    let j = matrix.length - 1;
    let m;
    while(j >= i) {
        m = Math.ceil((i + j) / 2);
        mLen = matrix[m].length - 1;
        if(target > matrix[m][mLen] )  i = m + 1
        else if(target < matrix[m][mLen] && target < matrix[m][0]) j  = m - 1;
        else break;
    }


    if(!(j >= i)) return false;

    let foundArr = matrix[m];
    let k = 0;
    let l = foundArr.length - 1;

    console.log(foundArr, 'foundArr');

    while(l >= k) {
        let n = Math.ceil((k + l) / 2);
        if(foundArr[n] === target) {
           return true;
        } else if (foundArr[n] > target) {
            l = n - 1;
        } else {
           k = n + 1;
        }
    }

    return false;
};
```


### Time: 55 minutes
### What needs to do? logic building, practice the core binary algorithm.
