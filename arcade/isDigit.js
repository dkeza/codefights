function isDigit(symbol) {
    let result = false;

    result = !isNaN(symbol - parseFloat(symbol));

    return result;
}

let s = "1";

console.log(isDigit(s));