function firstNotRepeatingCharacter(s) {
    let result = "_", repeats = {};
    for (let i = 0; i < s.length; i++) {
        if (repeats.hasOwnProperty([s[i]])) { 
            repeats[s[i]] += 1; 
        } else { 
            repeats[s[i]] = 1; 
        }
    }
    for (let i in s) {
        if (repeats[s[i]] == 1) { 
            result = s[i]; 
            break;
        }
    }
    return result;
}

console.log(firstNotRepeatingCharacter("abaca"));
console.log(firstNotRepeatingCharacter("abacabad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));