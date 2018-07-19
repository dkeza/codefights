function isCryptSolution(crypt, solution) {
    let result = false, numbersArr = [], solObj = {}, sum = 0, validNumber = true;

    // Copy key/values from solutions array into object, for simpler searching
    for (let i = 0; i < solution.length; i++) {
        solObj[solution[i][0]] = solution[i][1];
    };

    // Scan thrugh crypt array, and decode letters into numbers. Decoded numbers store as strings
    // in numberArr array
    for (let e of crypt) {
        numbersArr.push("");
        for (let l of e) {
            let charNum = "";
            charNum = solObj[l];
            numbersArr[numbersArr.length-1] = numbersArr[numbersArr.length-1] + charNum;
        }
    };

    // Scan through numbersArr array and convert string to numbers, and sum all elements, 
    // except last element, which is a result
    for (let i = 0; i < numbersArr.length - 1; i++) {
        // Number is not a valid number, when it hat leading zero.
        if (numbersArr[i].length>1 && numbersArr[i].substr(0,1)==="0") {
            validNumber = false;
            break;
        }
        sum = sum + parseInt(numbersArr[i]);
    };

    // Check sum with result
    if (validNumber) {
        if (!(numbersArr[numbersArr.length-1].length>1 && numbersArr[numbersArr.length-1].substr(0,1)==="0")) {
            if (sum === parseInt(numbersArr[numbersArr.length-1])) {
                // All checks passed, mark it as valid
                result = true;
            }
        }
    };
    return result;
}

// crypt = ["SEND", "MORE", "MONEY"];

// solution = [['O', '0'],
//             ['M', '1'],
//             ['Y', '2'],
//             ['E', '5'],
//             ['N', '6'],
//             ['D', '7'],
//             ['R', '8'],
//             ['S', '9']];

// crypt = ["A", "A", "A"];
// solution = [["A","0"]];

crypt = ["WASD", 
 "IJKL", 
 "AOPAS"];
solution = [["W","2"], 
 ["A","0"], 
 ["S","4"], 
 ["D","1"], 
 ["I","5"], 
 ["J","8"], 
 ["K","6"], 
 ["L","3"], 
 ["O","7"], 
 ["P","9"]];

console.log(isCryptSolution(crypt, solution));