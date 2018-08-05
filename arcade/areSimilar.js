function areSimilar(a, b) {
    let result = false, aChecked = [], bChecked = [];

    if (a.toString()===b.toString()) {
        result = true;
    } else {
        for (let i = 0; i<a.length; i++) {
            if (a[i]!==b[i]) {
                aChecked.push(a[i]);
                bChecked.push(b[i]);
            }
        }
        if (bChecked.length === 2) {
            bChecked = bChecked.reverse();
            if (aChecked.toString()===bChecked.toString()) {
                result = true;
            }
        }
    }
 
    return result;
}

let a = [], b = [];

// a = [1, 2, 3];
// b = [1, 2, 3];

// a = [1, 2, 3];
// b = [2, 1, 3];

// a = [2, 3, 9];
// b = [10, 3, 2];

// a = [1, 1, 4];
// b = [1, 2, 3];

a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
b = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];

console.log(areSimilar(a, b));