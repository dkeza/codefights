function avoidObstacles(inputArray) {
    for (let i = 1; ; i++) {
        let count = 0;
        for (let j = 0; j < inputArray.length; j++) {   
            if (inputArray[j] % i == 0) {
                break;
            }
            count++;
            if (count >= inputArray.length){
                return i;
            }
        }
    }
}

let a = [];

//a = [5, 3, 6, 7, 9];
//a = [2, 3];
a = [1, 4, 10, 6, 2];

console.log(avoidObstacles(a));

