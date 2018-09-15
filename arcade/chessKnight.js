function chessKnight(cell) {
    var b = new Buffer(cell);
    var x = b[0] - 96,
        y = b[1] - 48;
    x = (x > 4 ? x - (x % 5 * 2 + 1) : x);
    y = (y > 4 ? y - (y % 5 * 2 + 1) : y);

    if (x * y > 8) return 8;
    if (x * y > 5) return 6;
    if (x * y > 2) return 4;
    if (x * y == 2) return 3;
    return 2;
}