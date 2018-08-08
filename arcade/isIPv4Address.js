function isIPv4Address(inputString) {
    // Declare variables. Default output is false, that is, it is not valid IPv4 address.
    let result = false, arrayOfSegments = [];

    // Convert string to array, to easily check each number.
    arrayOfSegments = inputString.split(".");

    // Check if we have 4 numbers. If not, is it not valid.
    if (arrayOfSegments.length === 4) {
        // Presume it is valid address.
        result = true;

        // Check every element of array
        for (const e of arrayOfSegments) {
            // Check is element a number
            const isNum = /^\d+$/.test(e);

            if (!isNum) {
                // Not a number, set result to false and abort looping.
                result = false;
                break;
            }
            
            if (e < 0 || e > 255) {
                // Number is not in 0 .. 255 interval. Set to false and abort looping.
                result = false;
                break;
            }
        }        
    }

    return result;
}

let s = "";
//s = "172.16.254.1";
s = ".254.255.0";
s = "1.1.1.1a";
s = "172.16.254.1";
console.log(isIPv4Address(s));