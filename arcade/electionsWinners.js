function electionsWinners(votes, k) {
    let result = 0, max = 0, countMaxes = 0;

    max = arrayMax(votes);

    if (k===0) {
        for (let i = 0; i < votes.length; i++) {
            if (votes[i]===max) {
                countMaxes++;
            }
        }
        if (countMaxes===1) {
            result = 1;
        }
    } else {
        for (let i = 0; i < votes.length; i++) {
            if (votes[i] + k > max) {
                countMaxes++;
            }
        }
        result = countMaxes;
    }

    return result;
}

function arrayMax(array) {
    return array.reduce((a, b) => Math.max(a, b));
}

let v = [], k = 0;
v = [2, 3, 5, 2];
k = 3;

console.log(electionsWinners(v, k));