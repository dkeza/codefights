function reverseParentheses(s) {
    let newStr = "", tempStr = "", inBrackets = false, startBr = -1, endBr = -1;
    if (s.length>0) {
        newStr = s;
        while (newStr.indexOf('(')>-1) {
            newStr = removeOnePairOfBRackets(newStr);
        }
    }
    return newStr;
}

function removeOnePairOfBRackets(partStr) {
    let newStr = "", tempStr = "", startBr = -1, endBr = -1;
    for (let i = 0; i < partStr.length; i++) {
        let char = partStr[i];
        if (char === "(") {
            startBr = i+1;
        } else if (char === ")") {
            endBr = i;
            break;
        }
    }
    tempStr = partStr.slice(startBr,endBr);
    tempStr = tempStr.split("").reverse().join("");
    newStr = partStr.substr(0,startBr-1) + tempStr + partStr.substr(startBr + tempStr.length+1);
    return newStr;
}

let s = "a(bc)de";
s = "a(bcdefghijkl(mno)p)q";

console.log(reverseParentheses(s));
