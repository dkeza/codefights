function alternatingSums(a) {
    result = [0,0];
    
    for (let i = 0; i<a.length; i++) {
        if (i%2===0) {
            result[0] = result[0] + a[i];
        } else {
            result[1] = result[1] + a[i];
        }
    }
    
    return result;
}

a = [50, 60, 60, 45, 70];

r = alternatingSums(a);

console.log(r);