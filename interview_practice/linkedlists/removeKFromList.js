// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

function removeKFromList(l, k) {
    let pointerCurrent = null, pointerPrevious = null;
    
    pointerCurrent = l;

    while (pointerCurrent !== null) {
        console.log(pointerCurrent.value);
        if (pointerCurrent.value === k) {
            if (pointerPrevious === null) {
                l = pointerCurrent.next;
            } else {
                if (pointerPrevious.next === null && pointerCurrent.next === null) {
                    l = null;
                    break;
                }
                pointerPrevious.next = pointerCurrent.next;
            }
            pointerPrevious = pointerCurrent.next;
        } else {
            pointerPrevious = pointerCurrent;
        }
        
        pointerCurrent = pointerCurrent.next;
    }

    return l;
}

function removeKFromList3(l, k) {
    let fakeHead = null, curr = null, prev = null;
    
    fakeHead = { value: -1, next: null};
    fakeHead.next = l;
    curr = l;
    prev = fakeHead;

    while (curr !== null) {
        if (curr.value === k) {
            prev.next = curr.next;
        } else {
            prev = prev.next;
        }
        curr = curr.next;
    }

    return fakeHead.next;
}

// Recursion
function removeKFromList2(l, k) {
    if (!l) {
      return null;
    } else {
      l.next = removeKFromList(l.next, k);
      return l.value === k ? l.next : l;
    }
}

//l = [7, 1, 2, 3, 4, 5];
k = 1000;

l = {
     value: 1000,
     next: {
         value: 1000,
         next: null
     }
    }


// l = {
//     value: 7,
//     next: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: {
//                         value: 5,
//                         next: null
//                     }
//                 }
//             }
//         }
//     }
// }

console.log(removeKFromList3(l, k));