function longestWord(text) {
    let result = '', oneWord = '';
    
    text = text + ' ';

    for (let c of text) {
        let asciiCode = 0, isALetter = false;
        asciiCode = c.charCodeAt(0);
        isALetter = (asciiCode >= 65 && asciiCode <= 90 || asciiCode >= 97 && asciiCode <= 122);
        isALetter
        if (isALetter) {
            oneWord = oneWord + c;
            oneWord
        } else {
            if (result.length < oneWord.length) {
                result = oneWord;
            }
            oneWord = '';
        }
    }

    return result;
}

let t = '';

//t = "Ready, steady, go!";

//console.log(longestWord(t)); // steady

t = "ABCd";

console.log(longestWord(t)); // ABCd