// Making each Square object and putting them in an array to cycle through.
var A1 = new Square("A1", 0, 1, 1);
var A2 = new Square("A2", 0, 2, 1);
var A3 = new Square("A3", 0, 3, 1);
var A4 = new Square("A4", 0, 4, 1);
var B1 = new Square("B1", 0, 1, 2);
var B2 = new Square("B2", 0, 2, 2);
var B3 = new Square("B3", 0, 3, 2);
var B4 = new Square("B4", 0, 4, 2);
var C1 = new Square("C1", 0, 1, 3);
var C2 = new Square("C2", 0, 2, 3);
var C3 = new Square("C3", 0, 3, 3);
var C4 = new Square("C4", 0, 4, 3);
var D1 = new Square("D1", 0, 1, 4);
var D2 = new Square("D2", 0, 2, 4);
var D3 = new Square("D3", 0, 3, 4);
var D4 = new Square("D4", 0, 4, 4);
var grid = [A1, A2, A3, A4, B1, B2, B3, B4, C1, C2, C3, C4, D1, D2, D3, D4];

// Square constructor
function Square(name, count, xCoord, yCoord) {
    this.name = name;
    this.count = count;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
}

// the main function. It changes the color of any clicked button and all of its
// neighbors.
function colorChange(id) {
    var target = document.getElementById(id);
    var selected = matchSquare(id);
    for (i = 0; i < grid.length; i++) {
        if ((((selected.xCoord+1) == grid[i].xCoord) ||  ((selected.xCoord-1) == grid[i].xCoord)) &&
            (selected.yCoord == grid[i].yCoord)) {
            if (grid[i].count == 0) {
                document.getElementById(grid[i].name).style.background = 'linear-gradient(#ffffb3, #ffff66)';
                grid[i].count++;
            }
            else if (grid[i].count == 1) {
                document.getElementById(grid[i].name).style.background = 'linear-gradient(#ff8080, #ff3333)';
                grid[i].count++;
            }
            else {
                document.getElementById(grid[i].name).style.background = 'linear-gradient(#ffffff, #d9d9d9)';
                grid[i].count = 0;
            }
        }
        if ((((selected.yCoord+1) == grid[i].yCoord) ||  ((selected.yCoord-1) == grid[i].yCoord)) &&
            (selected.xCoord == grid[i].xCoord)) {
            if (grid[i].count == 0) {
                document.getElementById(grid[i].name).style.background = 'linear-gradient(#ffffb3, #ffff66)';
                grid[i].count++;
            }
            else if (grid[i].count == 1) {
                document.getElementById(grid[i].name).style.background = 'linear-gradient(#ff8080, #ff3333)';
                grid[i].count++;
            }
            else {
                document.getElementById(grid[i].name).style.background = 'linear-gradient(#ffffff, #d9d9d9)';
                grid[i].count = 0;
            }
        }
    }
    if (selected.count == 0) {
        target.style.background = 'linear-gradient(#ffffb3, #ffff66)';
        selected.count++;
    }
    else if (selected.count == 1) {
        target.style.background = 'linear-gradient(#ff8080, #ff3333)';
        selected.count++;
    }
    else {
        target.style.background = 'linear-gradient(#ffffff, #d9d9d9)';
        selected.count = 0;
    }
}

// the function for matching a clicked button with its Square object
function matchSquare(id) {
    for (i = 0; i < grid.length; i++) {
        if (grid[i].name == id) {
            return grid[i];
        }
    }
}

// resets the grid back to its original (white) configuration
function reset() {
    for (i = 0; i < grid.length; i++) {
        document.getElementById(grid[i].name).style.background = 'linear-gradient(#ffffff, #d9d9d9)';
        grid[i].count = 0;
    }
}