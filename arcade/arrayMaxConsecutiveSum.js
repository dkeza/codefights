function arrayMaxConsecutiveSum(inputArray, k) {
    var s0 = 0;
    for(var i = 0;i < k;i++)
        s0 += inputArray[i];
    var s1 = s0;
    for(var i = 1; i <= inputArray.length - k;i++){
        s1 = s1 - inputArray[i-1] + inputArray[i+k-1];
        if(s1 > s0) s0 = s1;
    }
    return s0;
}

let i = [], k=0;

i = [2, 3, 5, 1, 6]
k = 2;

console.log(arrayMaxConsecutiveSum(i, k));

// function arrayMaxConsecutiveSum(inputArray, k) {
//     let result = 0;

//     for (let i = 0; i < inputArray.length; i++) {
//         let sum = 0;
//         for (y = 0; y < k; y++) {
//             let num = 0;
//             num = inputArray[i+y];
//             if (num != undefined) {
//                 sum = sum + inputArray[i+y];
//             }
//             result = Math.max(sum, result);
//         }

//     }
//     return result;
// }