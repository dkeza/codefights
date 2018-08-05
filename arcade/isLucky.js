function isLucky(n) {
    let result = false, sumleft = 0, sumright = 0, str = "" + n;

    for (let i = 0; i < str.length / 2; i++) {
        sumleft = sumleft + parseInt(str[i]);
    }

    for (let i = str.length / 2; i < str.length; i++) {
        sumright = sumright + parseInt(str[i]);
    }

    result = sumleft === sumright ? true : false;

    return result;
}

let n = 0;
n = 1230;
n = 239017;
console.log(isLucky(n));