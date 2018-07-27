function matrixElementsSum(matrix) {
    let result = 0;
    for (let i=0;i<matrix.length;i++) {
        for (let y=0;y<matrix[i].length;y++) {
            let number = matrix[i][y];
            if (i>0) {
                if (matrix[i-1][y]!==0) {
                    result = result + number;    
                } else {
                    matrix[i][y] = 0;
                }
            } else {
                result = result + number;
            }
        }
    }
    return result;
}

// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]];

matrix = [[1, 1, 1, 0], 
          [0, 5, 0, 1], 
          [2, 1, 3, 10]];

console.log(matrixElementsSum(matrix));