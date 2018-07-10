function sudoku2(grid) {
    let result = true, subAr1 = {}, subAr2 = {}, subAr3 = {}, subAr4 = {}, subAr5 = {}, subAr6 = {}, subAr7 = {}, subAr8 = {}, subAr9 = {};

    for (let i = 0; i < grid.length; i++) {
        let trackerX = {}, trackerY = {};
        if (!result) {
            break;
        }
        for (let y = 0; y < grid.length; y++) {
            if (grid[i][y] !== ".") {
                if (trackerX[grid[i][y]]) {
                    trackerX[grid[i][y]]++;
                } else {
                    trackerX[grid[i][y]] = 1;
                }
            }
            if (grid[y][i] !== ".") {
                if (trackerY[grid[y][i]]) {
                    trackerY[grid[y][i]]++;
                } else {
                    trackerY[grid[y][i]] = 1;
                }
            }
            if (grid[i][y] !== ".") {
                if (i >= 0 && i <= 2 && y >= 0 && y <= 2) {
                    if (subAr1[grid[i][y]]) {
                        subAr1[grid[i][y]]++;
                    } else {
                        subAr1[grid[i][y]] = 1;
                    }
                }
                if (i >= 3 && i <= 5 && y >= 0 && y <= 2) {
                    if (subAr2[grid[i][y]]) {
                        subAr2[grid[i][y]]++;
                    } else {
                        subAr2[grid[i][y]] = 1;
                    }
                }
                if (i >= 6 && i <= 8 && y >= 0 && y <= 2) {
                    if (subAr3[grid[i][y]]) {
                        subAr3[grid[i][y]]++;
                    } else {
                        subAr3[grid[i][y]] = 1;
                    }
                }
                if (i >= 0 && i <= 2 && y >= 3 && y <= 5) {
                    if (subAr4[grid[i][y]]) {
                        subAr4[grid[i][y]]++;
                    } else {
                        subAr4[grid[i][y]] = 1;
                    }
                }
                if (i >= 3 && i <= 5 && y >= 3 && y <= 5) {
                    if (subAr5[grid[i][y]]) {
                        subAr5[grid[i][y]]++;
                    } else {
                        subAr5[grid[i][y]] = 1;
                    }
                }
                if (i >= 6 && i <= 8 && y >= 3 && y <= 5) {
                    if (subAr6[grid[i][y]]) {
                        subAr6[grid[i][y]]++;
                    } else {
                        subAr6[grid[i][y]] = 1;
                    }
                }
                if (i >= 0 && i <= 2 && y >= 6 && y <= 8) {
                    if (subAr7[grid[i][y]]) {
                        subAr7[grid[i][y]]++;
                    } else {
                        subAr7[grid[i][y]] = 1;
                    }
                }
                if (i >= 3 && i <= 5 && y >= 6 && y <= 8) {
                    if (subAr8[grid[i][y]]) {
                        subAr8[grid[i][y]]++;
                    } else {
                        subAr8[grid[i][y]] = 1;
                    }
                }
                if (i >= 6 && i <= 8 && y >= 6 && y <= 8) {
                    if (subAr9[grid[i][y]]) {
                        subAr9[grid[i][y]]++;
                    } else {
                        subAr9[grid[i][y]] = 1;
                    }
                }
            }
        };
        for (let e in trackerX) {
            if (trackerX[e]>1) {
                result = false;
                break;
            }
        }
        if (result) {
            for (let e in trackerY) {
                if (trackerY[e]>1) {
                    result = false;
                    break;
                }
            }
        }
    };
    
    if (result) {
        for (let e in subAr1) {
            if (subAr1[e]>1) {
                result = false;
                break;
            }
        }
    }

    if (result) {
        for (let e in subAr2) {
            if (subAr2[e]>1) {
                result = false;
                break;
            }
        }
    }

    if (result) {
        for (let e in subAr3) {
            if (subAr3[e]>1) {
                result = false;
                break;
            }
        }
    }

    if (result) {
        for (let e in subAr4) {
            if (subAr4[e]>1) {
                result = false;
                break;
            }
        }
    }

    if (result) {
        for (let e in subAr5) {
            if (subAr5[e]>1) {
                result = false;
                break;
            }
        }
    }

    if (result) {
        for (let e in subAr6) {
            if (subAr6[e]>1) {
                result = false;
                break;
            }
        }
    }

    if (result) {
        for (let e in subAr7) {
            if (subAr7[e]>1) {
                result = false;
                break;
            }
        }
    }

    if (result) {
        for (let e in subAr8) {
            if (subAr8[e]>1) {
                result = false;
                break;
            }
        }
    }

    if (result) {
        for (let e in subAr9) {
            if (subAr9[e]>1) {
                result = false;
                break;
            }
        }
    }

    return result;
}

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']];

console.log(sudoku2(grid));


grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']];

console.log(sudoku2(grid));

grid = [["7",".",".",".","4",".",".",".","."], 
        [".",".",".","8","6","5",".",".","."], 
        [".","1",".","2",".",".",".",".","."], 
        [".",".",".",".",".","9",".",".","."], 
        [".",".",".",".","5",".","5",".","."], 
        [".",".",".",".",".",".",".",".","."], 
        [".",".",".",".",".",".","2",".","."], 
        [".",".",".",".",".",".",".",".","."], 
        [".",".",".",".",".",".",".",".","."]];

console.log(sudoku2(grid));

grid = [[".",".",".",".",".",".",".",".","1"], 
        [".",".",".",".",".","6",".",".","."], 
        ["4",".",".",".",".",".","3","8","."], 
        ["7",".",".",".",".",".",".",".","."], 
        [".",".",".",".","5","3",".",".","."], 
        [".",".",".",".","6","8",".",".","."], 
        ["3",".",".","9",".",".",".",".","."], 
        [".",".",".",".",".","2","1","1","."], 
        [".",".",".",".",".",".",".",".","."]];

console.log(sudoku2(grid));

grid = [[".","4",".",".",".",".",".",".","."], 
        [".",".","4",".",".",".",".",".","."], 
        [".",".",".","1",".",".","7",".","."], 
        [".",".",".",".",".",".",".",".","."], 
        [".",".",".","3",".",".",".","6","."], 
        [".",".",".",".",".","6",".","9","."], 
        [".",".",".",".","1",".",".",".","."], 
        [".",".",".",".",".",".","2",".","."], 
        [".",".",".","8",".",".",".",".","."]]

console.log(sudoku2(grid));