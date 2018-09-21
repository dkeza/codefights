function absoluteValuesSumMinimization(a) {
    let minSum = -1, maxNum = 0, minNum = 0, result = 0;
    
    maxNum = Math.max(...a);
    minNum = Math.min(...a);

    for (let x = minNum; x <= maxNum; x++) {
        let sum = 0;
        for (let i = 0; i<a.length; i++) {
            let newAbs = 0;
            newAbs = Math.abs(a[i] - x);
            sum = sum + newAbs;
        }
        if (minSum === -1 || minSum > sum) {
            minSum = sum;
            result = x;
        }
    }

    return result;
}

let a = [];

//a = [2, 4, 7];
a = [-4, -1];
console.log(absoluteValuesSumMinimization(a));