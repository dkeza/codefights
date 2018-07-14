// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
    if (!l) {
      return null;
    } else {
      l.next = removeKFromList(l.next, k);
      return l.value === k ? l.next : l;
    }
}

//l = [3, 1, 2, 3, 4, 5];
k = 3;

l = {
    value: 3,
    next: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: {
                        value: 5,
                        next: null
                    }
                }
            }
        }
    }
}

console.log(removeKFromList(l, k));