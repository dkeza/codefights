function boxBlur(image) {
    let result = [], xLen = 0, yLen = 0;

    xLen = image.length;
    yLen = image[0].length;

    for (let x = 0; x<xLen-2; x++) {
        let tempArray = [];
        for (let y = 0; y<yLen-2; y++) {
            let sum = 0;
            for (let i = x; i<x+3; i++) {
                for (let p = y; p<y+3; p++) {
                     sum = sum + image[i][p];
                }
            }
            tempArray.push(Math.floor(sum/9));
        }

        result.push(tempArray);
    }

    return result;
}

let i = 0;

i = [[1, 1, 1], 
        [1, 7, 1], 
        [1, 1, 1]];

i = [[7, 4, 0, 1], 
    [5, 6, 2, 2], 
    [6, 10, 7, 8], 
    [1, 4, 2, 0]];

i = [[36,0,18,9], 
    [27,54,9,0], 
    [81,63,72,45]];

console.log(boxBlur(i)); 