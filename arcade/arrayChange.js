function arrayChange(inputArray) {
    let result = 0, lastNum = undefined;

    for (let i = 0; i<inputArray.length; i++) {
        if (!(lastNum === undefined)) {
            if(!(inputArray[i]>lastNum)) {
                let dif = 0;
                dif = (lastNum+1)-inputArray[i];
                result = result + Math.abs(dif);
                lastNum = inputArray[i]+Math.abs(dif);
            } else {
                lastNum = inputArray[i];
            }
        } else {
            lastNum = inputArray[i];
        }
    }

    return result;
}

let a = [];

//a = [1,1,1];
a =  [-1000, 0, -2, 0];
console.log(arrayChange(a))