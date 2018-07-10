function rotateImage(a) {
    const rotatedImage = [], rowLength = a.length;
    for (let i = 0; i < rowLength; i++) {
        rotatedImage.push([]);
        for (let y = rowLength-1; y >= 0; y--) {
            rotatedImage[rotatedImage.length-1].push(a[y][i]);
        }
    }
    return rotatedImage;
}

console.log( rotateImage(
    [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]));