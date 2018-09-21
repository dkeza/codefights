function circleOfNumbers(n, firstNumber) {
    let result = 0, half = 0;
    half = Math.floor(n / 2);

    if (firstNumber < half) {
        result = half + firstNumber;
    } else {
        result = Math.abs(half - firstNumber);
    }
    return result;
}

let n = 0, fn = 0;

//n = 10;
//fn = 2;

n = 10;
fn = 7;

console.log(circleOfNumbers(n, fn));