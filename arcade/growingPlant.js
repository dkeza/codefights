function growingPlant(upSpeed, downSpeed, desiredHeight) {
    if(desiredHeight <= upSpeed)
        return 1;
    return Math.floor((desiredHeight - upSpeed - 1) / (upSpeed - downSpeed)) + 2;
}


// function growingPlant(upSpeed, downSpeed, desiredHeight) {
//     let result = 0, currentHeight = 0;

//     while (currentHeight < desiredHeight) {
//         currentHeight = currentHeight + (upSpeed - downSpeed);
//         currentHeight
//         if (currentHeight >= desiredHeight) {
//             break;
//         }
//         result = result + 1;
//     } 
    
//     return result;
// }

let upSpeed = 0, downSpeed = 0, desiredHeight = 0;

// upSpeed = 100;
// downSpeed = 10;
// desiredHeight = 910;

upSpeed = 10;
downSpeed = 9;
desiredHeight = 4;

console.log(growingPlant(upSpeed, downSpeed, desiredHeight));