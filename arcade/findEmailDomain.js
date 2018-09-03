function findEmailDomain(address) {
    let result = "", length = 0;

    length = address.length;

    for (let i = length - 1; i >= 0; i--) {
        let c = "";
        c = address.charAt(i);
        if (c === "@") {
            break;
        }
        result = c + result;
    }

    return result;
}

let a = "";

a = "prettyandsimple@example.com";

console.log(findEmailDomain(a));