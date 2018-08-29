function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let result = 0;

    if (weight1 + weight2 <= maxW) {
        result = value1 + value2;
    } else if (value2 > value1 && weight2 <= maxW) {
        result = value2;
    } else if (value2 > value1 && weight1 <= maxW) {
        result = value1;
    } else if (value1 > value2 && weight1 <= maxW) {
        result = value1;
    } else if (value1 === value2 && (weight1 <= maxW || weight2 <= maxW)) {
        result = value1;
    };
    return result;
}

let value1, weight1, value2, weight2, maxW;

// value1 = 10;
// weight1 = 5;
// value2 = 6;
// weight2 = 4;
// maxW = 8;

value1 = 15;
weight1 = 2;
value2 = 20;
weight2 = 3;
maxW = 2;


console.log(knapsackLight(value1, weight1, value2, weight2, maxW));