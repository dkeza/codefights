function minesweeper(matrix) {
    let result = [], xLen = 0, yLen = 0;

    // Length of outer array
    xLen = matrix.length;
    // Length of inner array
    yLen = matrix[0].length;

    // Loop through all elements in array
    for (let x = 0; x<xLen; x++) {
        // Create empty inner array
        let tempArray = [];
        for (let y = 0; y<yLen; y++) {
            // Check for mines in the neighboring cells. Call calcNumOfMines function for every element
            let numOfMines = calcNumOfMines(matrix, x, y, xLen, yLen);
            tempArray.push(numOfMines);
        }
        result.push(tempArray);
    }

    return result;
}

function calcNumOfMines(matrix, x, y, xLen, yLen) {
    let num = 0, leftBound = 0, rightBound = 0, upperBound = 0, lowerBound = 0;

    // Define boundaries about one elements.
    leftBound = Math.max(x - 1, 0);
    rightBound = Math.min(x + 1, xLen - 1);
    upperBound = Math.max(y - 1, 0);
    lowerBound = Math.min(y + 1, yLen - 1);

    // Loop through new smaller matrix for selected element
    for (let inX = leftBound; inX<=rightBound; inX++) {
        for (let inY = upperBound; inY<=lowerBound; inY++) {
            // Ignore mine for selected element, check only neighboring elements
            if (!(x == inX && y == inY) && matrix[inX][inY]) {
                // Add to counter of mines
                num++;
            }
        }
    }

    return num;
}

let m = [];

m = 
    [[true,  false, false],
    [ false, true,  false],
    [ false, false, false]];

console.log(minesweeper(m));