"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function getNeighbors(coord, maxX, maxY) {
    const { x, y } = coord;
    // Collect the potential neighbors
    const neighbors = [
        x > 0 ? { x: x - 1, y } : null, // left
        x < maxX ? { x: x + 1, y } : null, // right
        y > 0 ? { x, y: y - 1 } : null, // top
        y < maxY ? { x, y: y + 1 } : null // bottom
    ];
    // Filter out null values and return only valid neighbors
    return neighbors.filter((neighbor) => neighbor !== null);
}
function selectByColor(coord, grid) {
    const targetColor = grid[coord.x][coord.y];
    let queue = [];
    let maxX = grid.length - 1;
    let maxy = grid[0].length - 1;
    let res = new Set();
    queue.push(coord);
    res.add((0, utils_1.serialize)(coord));
    let curCoord = queue.shift();
    while (curCoord !== undefined) {
        getNeighbors(curCoord, maxX, maxy)
            .filter(n => grid[n.x][n.y] == targetColor && !res.has((0, utils_1.serialize)(n)))
            .forEach(n => {
            res.add((0, utils_1.serialize)(n));
            queue.push(n);
        });
        curCoord = queue.shift();
    }
    return { elems: res, col: targetColor };
}
// Usage
const rows = 20;
const cols = 20;
const centerSize = 30; // Size of the central area to fill with 2
const centerValue = 2; // Value to fill the center with
// const grid = generateGrid(rows, cols, centerSize, centerValue);
(0, utils_1.printGrid)(utils_1.exampleGrid1);
let res = selectByColor(utils_1.interestPoint1, utils_1.exampleGrid1);
let arr = Array.from(res.elems).sort();
console.log("broo");
console.log(res.col);
console.log(arr);
// printGrid(res)
// Optionally, log a small section of the grid to verify
// console.log(grid.map(row => row));  // Displaying the top-left 10x10 portion of the grid
function print2DArray(array) {
    for (let row of array) {
        console.log(row.join(" "));
    }
}
