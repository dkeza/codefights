function allLongestStrings(inputArray) {
    let result = [], maxlength = 0;

    for (s of inputArray) {
        if (s.length > maxlength) {
            maxlength = s.length;
        }
    }

    for (s of inputArray) {
        if (s.length === maxlength) {
            result.push(s);
        }
    }

    return result;
}

inputArray = ["aba", "aa", "ad", "vcd", "aba"];

console.log(allLongestStrings(inputArray));