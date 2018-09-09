function lineEncoding(s) {
    let result = "", arr = [];

    for (let c of s) {
        if (arr.length === 0) {
            let obj = {};
            obj[c]=1;
            arr.push(obj);
        } else {
            let last = arr[arr.length-1];
            if (last[c]===undefined) {
                let obj = {};
                obj[c]=1;
                arr.push(obj);
            } else {
                last[c] = last[c] + 1;
            }
        }
    }

    for (let o of arr) {
        let key = "", count = 0, one = "";
        key = Object.keys(o)[0];
        count = o[key];
        one = count > 1 ? count + key : key;
        result = result + one;
    }

    return result;
}

let s = "";

//s = "aabbbc"; // 2a3bc
s = "adfaaa"; // adf3a

console.log(lineEncoding(s));