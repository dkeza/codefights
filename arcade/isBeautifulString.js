function isBeautifulString(inputString) {
    let result = true, charCounter = {}, prev = -1, started = false, checked = 0, noOfLetters = 0;

    for (let c of inputString) {
        if (charCounter[c]===undefined) {
            charCounter[c]=1;
        } else {
            charCounter[c]++;
        }
    }

    noOfLetters = Object.keys(charCounter).length;

    for (let i = 97; i<=122; i++) {
        let c = "";
        c = String.fromCharCode(i);

        if (charCounter[c]!==undefined) {
            let occurences = 0;

            if (!started) {
                started = true;
            }
            checked++;
            
            occurences = charCounter[c];

            if (occurences <= prev || prev === -1) {
                prev = occurences;
            } else {
                result = false;
                break;
            }
        } else {
            if (started || c=="a") {
                if (checked !== noOfLetters) {
                    result = false;
                }
                break;
            }
        }
    }

    return result;
}

let s = "";

//s = "bbbaacdafe"; // true
//s = "aabbb";
s = "bbc"; // false
//s = "bbbaacdafe"; // true
//s = "zaa";
console.log(isBeautifulString(s));