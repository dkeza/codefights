function longestDigitsPrefix(inputString) {
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        let c = '';
        c = inputString.charAt(i);
        if (!isNaN(parseInt(c, 10))) {
            result = result + c;
        } else {
            break;
        }
    }

    return result;
}

let i = "";

i = "123aa1";

console.log(longestDigitsPrefix(i));