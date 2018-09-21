function differentSymbolsNaive(s) {
    let result = 0, counter = {};

    for (let i = 0; i < s.length; i++) {
        let c = "";
        c = s.charAt(i);
        if (counter[c] === undefined) {
            counter[c] = true;
        }
    }

    for (let c in counter) {
        result++;
    }

    return result;
}

let s = "";

s = "cabca";

console.log(differentSymbolsNaive(s));