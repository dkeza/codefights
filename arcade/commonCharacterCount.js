function commonCharacterCount(s1, s2) {
    let result = 0, charsFound1 = {}, charsFound2 = {};
    
    for (let c of s1) {
        if (charsFound1[c]===undefined) {
            charsFound1[c] = 1;
        } else {
            charsFound1[c]++;
        }
    }

    for (let c of s2) {
        if (charsFound2[c]===undefined) {
            charsFound2[c] = 1;
        } else {
            charsFound2[c]++;
        }
    }

    for (let c in charsFound1) {
        if (charsFound2[c]!==undefined) {
            result = result + Math.min(charsFound1[c], charsFound2[c]);
        }
    }

    return result;
}

console.log(commonCharacterCount("aabcc","adcaa"));