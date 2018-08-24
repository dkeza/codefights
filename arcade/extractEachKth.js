function extractEachKth(inputArray, k) {
    let result = [];

    for (let i = 0; i < inputArray.length; i++) {
        let div = 0;
        div = (i+1) % k;
        if ( div !== 0 ) {
            result.push(inputArray[i]);
        }
    }

    return result;
}

let i = [], k = 0;

i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
k = 3;

console.log(extractEachKth(i, k));