function buildPalindrome(str) {
    var canConvert;
    for (var i = str.length;; i++) {
      canConvert = true;
      for (var j = 0; j < i - j - 1; j++) {
        if (i - j - 1 < str.length && str[j] != str[i - j - 1]) {
          canConvert = false;
          break;
        }
      }
      if (canConvert) {
        for (var j = str.length; j < i; j++) {
          str += str[i - j - 1];
        }
        return str;
      }
    }
  }

// function buildPalindrome(st) {
//     let result = "", isPal = false, isStEven = false, charToAdd = "", nCor = 0;
//     if (st.length % 2 === 0) {
//         isStEven = true;
//     }

//     result = st;

//     for (let y = 0; y < st.length; y++) {
//         isPal = isItPalindrome(result);
//         if (isPal) {
//             break;
//         } else {
//             nCor = isStEven ? 1 : 2;
//             charToAdd = st.charAt(st.length - y - nCor);
//             result = result + charToAdd;
//         }
//     }

//     return result;
// }

// function isItPalindrome(s) {
//     let sLen = 0, isEven = false, noOfCharsToCheck = 0, result = true;
//     sLen = s.length;
//     if (sLen % 2 === 0) {
//         isEven = true;
//     }
//     if (isEven) {
//         noOfCharsToCheck = sLen / 2;
//     } else {
//         noOfCharsToCheck = (sLen - 1) / 2;
//     }
//     for (let i = 0; i<noOfCharsToCheck; i++) {
//         let leftChar = "", rightChar = "";
//         leftChar = s.charAt(i);
//         rightChar = s.charAt(sLen - i - 1);
//         if (!(leftChar===rightChar)) {
//             result = false;
//         }
//     }
//     return result;
// }

let s = "";

//s = "abcdc"; // expect abcdcba
s = "abcdcba";
console.log(buildPalindrome(s));