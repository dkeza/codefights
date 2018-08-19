function chessBoardCellColor(cell1, cell2) {
    let result = false, chessBoard = [], colorCell1 = "", colorCell2 = "";

    // Get array chessboard
    chessBoard = GetChessBoardArray();

    // Get color for cell1 and cell2
    colorCell1 = GetCellColor(cell1, chessBoard);
    colorCell2 = GetCellColor(cell2, chessBoard);

    // Compare colors
    result = colorCell1 === colorCell2 ? true : false;

    return result;
}

function GetCellColor(cell, chessBoard) {
    let x = 0, y = 0, first = "", second = "";

    // Get X mark
    first = cell.charAt(0);
    // Get Y mark
    second = cell.charAt(1);

    // Convert X mark to X index of array
    if (first == "A") {
        x = 0;
    } else if (first == "B") {
        x = 1;
    } else if (first == "C") {
        x = 2;
    } else if (first == "D") {
        x = 3;
    } else if (first == "E") {
        x = 4;
    } else if (first == "F") {
        x = 5;
    } else if (first == "G") {
        x = 6;
    } else if (first == "H") {
        x = 7;
    }

    // Convert Y mark to Y index of array
    y = parseInt(second)-1;

    // Return color
    return chessBoard[x][y];


}

function GetChessBoardArray() {
    return [["w","b","w","b","w","b","w","b"],
            ["b","w","b","w","b","w","b","w"],
            ["w","b","w","b","w","b","w","b"],
            ["b","w","b","w","b","w","b","w"],
            ["w","b","w","b","w","b","w","b"],
            ["b","w","b","w","b","w","b","w"],
            ["w","b","w","b","w","b","w","b"],
            ["b","w","b","w","b","w","b","w"]];
}

let c1 = "", c2 = "";

//c1 = "A1";
//c2 = "C3";
//c1 = "A1";
//c2 = "H3";
c1 = "C8";
c2 = "H8";

console.log(chessBoardCellColor(c1, c2));