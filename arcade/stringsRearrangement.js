function isNext(string1,string2){
    var diff=0;
    for(var i=0;i<string1.length;i++){
        if(string1[i]!=string2[i])
            diff++;
    }
    if (diff!=1)
        return false;
    else
        return true;
}

function arranged(array){
    var chars=true;
    for(var i=0;i+1<array.length&&chars;i++){
        if(!isNext(array[i],array[i+1]))
            chars=false;
    }
    return chars;
}

function findNext(string,array){
    var index=-1;
    for(var i=0;i<array.length&&index==-1;i++){
        if(isNext(string,array[i]))
            index=i;
    }
    return index;
}

function stringsRearrangement(inputArray) {
    var next=0;
    inputArray.sort();
    for(var i=0;i<inputArray.length&&next>=0&&!arranged(inputArray);i++){
        next=findNext(inputArray[i],inputArray);
        if(next>=0&&(next>i+1||next<i-1)){
            inputArray.splice(i+1,0,inputArray[next])
            if(next<i+1)
                inputArray.splice(next,1);
            else
                inputArray.splice(next+1,1);
        }
    }
    return arranged(inputArray);
}


let i = [];
//i = ["aba", "bbb", "bab"];
//i = ["ab", "bb", "aa"];
//i = ["q","q"];
i = ["abc",  "abx",  "axx",  "abx",  "abc"];
console.log(stringsRearrangement(i));


// function stringsRearrangement(inputArray) {
//     let result = true, prev = "", breakLoop = false;;
//     inputArray
//     inputArray.sort(function(a, b){
//         if(a < b) return -1;
//         if(a > b) return 1;
//         return 0;
//     });
//     inputArray
//     for (let e of inputArray) {
//         let diffCounter = 0;
// e
//         if (prev === "") {
//             prev = e;
//         } else {
//             for (let i = 0; i<e.length;i++) {
//                 if (!(e.charAt(i) === prev.charAt(i))) {
//                     diffCounter++;
//                     if (diffCounter>1) {
//                         result = false;
//                         breakLoop = true;
//                     };
//                 }
//                 if (breakLoop === true) {
//                     break;
//                 }
//             }
//             prev = e;
//             if (result && diffCounter !== 1) {
//                 result = false;
//                 breakLoop = true;
//             }
//             if (breakLoop === true) {
//                 break;
//             }
//         }
//     }

//     return result;
// }

// let i = [];
// //i = ["aba", "bbb", "bab"];
// //i = ["ab", "bb", "aa"];
// //i = ["q","q"];
// i = ["abc",  "abx",  "axx",  "abx",  "abc"];
// console.log(stringsRearrangement(i));