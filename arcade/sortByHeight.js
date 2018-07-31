function sortByHeight(a) {
    let cleanArr = [];

    for (let e of a) {
        if (e!==-1) {
            cleanArr.push(e);
        }
    }

    cleanArr.sort(function(a, b) {
        return a - b;
      });

    for (let y = 0; y < cleanArr.length; y++) {
        let counter = 0;
        for (let i = 0; i<a.length;i++) {
            if (a[i]===-1) {
                continue;
            }
            if (y===counter) {
                a[i] = cleanArr[y];
                break;
            }
            
            counter = counter + 1;
        }
    }
    return a;
}

a = [-1, 150, 190, 170, -1, -1, 160, 180];
a = [4, 2, 9, 11, 2, 16];

console.log(sortByHeight(a));