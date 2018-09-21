function isMAC48Address(inputString) {
    let result = true, dashCounter = 0;

    if (inputString.length!==17) {
        result = false;
    } else {

        for(let i = 0; i < inputString.length; i++) {
            let c = inputString[i];
            if ((i+1) % 3 === 0) {
                if  (c !== "-") {
                    result = false;
                    break;
                }
            } else {
                if (!(isHex(c))) {
                    result = false;
                    break;
                }
            }
        }

    }

    return result;
}

function isHex(oneChar) {
    oneChar = oneChar.toLowerCase();
    var oneHex = parseInt(oneChar,16);
    return (oneHex.toString(16) === oneChar);
}

let s = "";
//s = "00-1B-63-84-45-E2";
s = "Z1-1B-63-84-45-E6";
console.log(isMAC48Address(s));