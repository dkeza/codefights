function deleteDigit(n) {
    let result = 0, numChar = '';

    numChar = '' + n;
    numChar
    for (let i = 0; i < numChar.length; i++) {
        let newNumChar = '', newNum = 0;
        newNumChar = removeCharacter(numChar, i);
        newNum = parseInt(newNumChar);
        if (newNum > result) {
            result = newNum;
        }
    }

    return result;
}

function removeCharacter(str, charPos) {
    let part1 = '', part2 = '';
    part1 = str.substring(0, charPos);
    part2 = str.substring(charPos + 1, str.length);
    return (part1 + part2);
 }

let num = 0;

num = 152;
console.log(deleteDigit(num)); // 52

num = 1001;
console.log(deleteDigit(num)); // 101
