function variableName(name) {
    let result = false, firstChar = "", isFirstCharNumber = false;

    // Get first character
    firstChar = name.charAt(0);
    firstChar
    // Check if first character us number
    isFirstCharNumber = !isNaN(parseInt(firstChar));

    // If first character is not number, then do other check
    if (!isFirstCharNumber) {

        // Check with RegEx if string is valid
        if (/^[a-z0-9_]+$/i.test(name)) {
            result = true;
        }
    }

    return result;
}

let s = "";
s = "var_1__Int";
console.log(variableName(s));