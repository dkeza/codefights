function digitDegree(n) {
    let result = 0, numStr = '';
    
    numStr = '' + n;

    while (numStr.length > 1) {
        let sum = 0;
        for (let i = 0; i < numStr.length; i++) {
            let c = '', n = 0;
            c = numStr.charAt(i);
            n = parseInt(c, 10);
            sum = sum + n;
        }
        numStr = '' + sum;
        result++;
    };

    return result;
}

let n = 0;

n = 5;

console.log(digitDegree(n));

n = 100;

console.log(digitDegree(n));

n = 91;

console.log(digitDegree(n));
