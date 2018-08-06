function palindromeRearranging(inputString) {
    let result = true, storage = {}, numOfElements = 0, odd = false, oddCounter = 0;

    // Check number of characters in string
    numOfElements = inputString.length;
    if (numOfElements%2!==0) {
        // If number of character is odd, then it is allowed to have in middle character which occurs only once
        odd = true;
    }

    // For every character create a property in object, and count how many times he occurs
    for (let c of inputString) {
        if (storage[c]===undefined) {
            storage[c] = 1;
        } else {
            storage[c]++;
        }
    }

    // Loop through all properties in storage objects, and check if number of characters is even number
    // When odd number of characters in string is found, allow only one character to allow only once
    for (let el in storage) {
        if (storage[el]===1) {
            if (odd && oddCounter < 2) {
                oddCounter++;
            } else {
                result = false;
                break;
            }
        } else if (storage[el]%2!==0) {
            result = false;
            break;
        }
    }

    return result;
}

let s = "";
s = "aabb";

console.log(palindromeRearranging(s));