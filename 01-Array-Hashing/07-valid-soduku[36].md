# [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/description/)

Determine if a`9 x 9` Sudoku boardis valid.Only the filled cells need to be validated**according to the following rules** :

- Each rowmust contain thedigits`1-9` without repetition.
- Each column must contain the digits`1-9`without repetition.
- Each of the nine`3 x 3` sub-boxes of the grid must contain the digits`1-9`without repetition.

**Note:**

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentionedrules.

**Example 1:**
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png" style="height: 250px; width: 250px;">

```
Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
```

**Example 2:**

```
Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the **5**  in the top left corner being modified to **8** . Since there are two 8's in the top left 3x3 sub-box, it is invalid.
```

**Constraints:**

- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit `1-9` or `'.'`.


```
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 9 * 9 board
    // Validation rules
    // Each row contains the digits 1-9 without repetition
    // Each column contains the digits 1-9 without repetition
    // Each of the nine 3*3 sub-boxes of the grid must contain the digits 1-9 without repetition
    // Check if row has repeated Items


    // Create columns
    const COLS = [[], [], [], [], [], [], [], [], []];
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < 9; j++) {
            COLS[j][i] = board[i][j]
        }
    }

    // check if col has repeated items;

    // Create 3*3 sub-box grid
    const SUB_BOXES = [[], [], [], [], [], [], [], [], []];
    for(let i = 0; i < board.length; i++) {
        if(i < 3) a = 0;
        else if(i >= 3 && i <= 5) a = 3;
        else a = 6
        let c = 0, d = 3;
        for(let j = a; j < a + 3; j++){
            SUB_BOXES[j] = SUB_BOXES[j].concat(board[i].slice(c, d));
            c = c + 3, d = d + 3
        }
    }


    // Util that checks if an Array have repeated items
    function isArrayItemRepeated(arr) {
        const numFreqCounter = {};
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === ".") continue;
            if(!numFreqCounter[arr[i]]) numFreqCounter[arr[i]] = 1;
            else return false;
        }

        return true;
    }


    for(let i = 0; i < 9; i++) {
        if(!isArrayItemRepeated(board[i]) || !isArrayItemRepeated(COLS[i]) || !isArrayItemRepeated(SUB_BOXES[i])) return false;
    }

    return true;
};
```
