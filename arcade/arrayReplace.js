function arrayReplace(inputArray, elemToReplace, substitutionElem) {

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i]==elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    }

    return inputArray;
}

i = [1,2,1];
er = 1;
se = 3;

console.log(arrayReplace(i,er,se));