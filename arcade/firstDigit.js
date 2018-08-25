function firstDigit(inputString) {
    let result = '';

    for (let i = 0; i<inputString.length; i++) {
        let c = '';
        c = inputString.charAt(i);
        if (!isNaN(parseInt(c, 10))) {
            result = c;
            break;
        }
    }

    return result;
}

let i = '';

i = "var_1__Int";

console.log(firstDigit(i));