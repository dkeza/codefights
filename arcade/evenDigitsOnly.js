function evenDigitsOnly(n) {
    // Initialize variables
    let result = false, arrDigit = [], strNum = '';

    // Persume number has all even digits
    result = true;

    // Convert number to string
    strNum = '' + n;
    // Create array of digits
    arrDigit = strNum.split('');

    // Loop through array of digits
    for (let strDigit of arrDigit) {
        let digit = 0;

        // Convert back to numeric
        digit = parseInt(strDigit);

        // Check if digit is even
        if (digit % 2 !== 0) {
            // Number has some digit which is not even, set result to false and get out of loop
            result = false;
            break;
        }
    }

    return result;
}

let n = 0;

n = 248622;

console.log(evenDigitsOnly(n));