function firstDuplicate(a) {
    let result = -1, duplitcates = new Set();
    
    for (let i = 0; i < a.length; i++) {
        if (duplitcates.has(a[i])) {
            result = a[i];
            break;
        } else {
            duplitcates.add(a[i]);
        }
    }
    
    return result;
}