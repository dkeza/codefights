function alphabeticShift(inputString) {
    let result = '';

    // Loop through string
    for (let i = 0; i < inputString.length; i++) {

        let char = '', newChar = '', asciiCode = 0;

        // Get one character
        char = inputString.charAt(i);

        if (char==='z') {
            // If character is z, go back to character a
            asciiCode = 'a'.charCodeAt(0);
        } else {
            // Convert character to ascii code, and add 1 to it
            asciiCode = char.charCodeAt(0);
            asciiCode++;
        }
        
        // Convert from newly calculated ascii code to character
        newChar = String.fromCharCode(asciiCode)

        // Add new character to resulting string
        result = result + newChar;

    }

    return result;
}

let s = '';

s = "crazy";

console.log(alphabeticShift(s));