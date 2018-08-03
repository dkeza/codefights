function addBorder(picture) {
    let result = [], rowLength = 0, stars = "";
    rowLength = picture[0].length + 2;
    stars = "*".repeat(rowLength);

    result.push(stars);

    for (r of picture) {
        result.push("*"+r+"*");
    }

    result.push(stars);

    return result;
}

let picture = ["abc",
"ded"];

r = addBorder(picture);
console.log(r);