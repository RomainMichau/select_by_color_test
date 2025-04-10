import {Coord, exampleGrid1, generateGrid, interestPoint1, interestPoint2, interestPoint3, interestPoint4, printGrid, serialize} from './utils'

function getNeighbors(coord: Coord, maxX: number, maxY: number): Coord[] {
    const { x, y } = coord;

    // Collect the potential neighbors
    const neighbors: (Coord | null)[] = [
        x > 0 ? { x: x - 1, y } : null, // left
        x < maxX ? { x: x + 1, y } : null, // right
        y > 0 ? { x, y: y - 1 } : null, // top
        y < maxY ? { x, y: y + 1 } : null  // bottom
    ];

    // Filter out null values and return only valid neighbors
    return neighbors.filter((neighbor): neighbor is Coord => neighbor !== null);
}

function fill(coord: Coord, grid: number[][], newColor: number): void {
    const targetColor = grid[coord.x][coord.y];
    if (targetColor === newColor) return;

    const queue: Coord[] = [coord];
    const maxX = grid.length - 1;
    const maxY = grid[0].length - 1;
    grid[coord.x][coord.y] = newColor;

    while (queue.length > 0) {
        const curCoord = queue.shift()!;
        const neighbors = getNeighbors(curCoord, maxX, maxY);

        neighbors.forEach(n => {
            if (grid[n.x][n.y] === targetColor) {
                grid[n.x][n.y] = newColor;
                queue.push(n);
            }
        });
    }
}


function selectByColor(coord: Coord, grid: number[][]): {elems: Set<String>, col: number} {
    const targetColor = grid[coord.x][coord.y]
    let queue: Coord[] = [];
    let maxX = grid.length - 1
    let maxy = grid[0].length - 1
    let res = new Set<string>()
    queue.push(coord)
    res.add(serialize(coord))
    let curCoord = queue.shift()
    while (curCoord !== undefined) {
        getNeighbors(curCoord, maxX, maxy)
        .filter(n => grid[n.x][n.y] == targetColor && !res.has(serialize(n)))
        .forEach(n => {
            res.add(serialize(n))
            queue.push(n)
        })
        curCoord = queue.shift()
      }
      return {elems: res, col:targetColor}
}

type State = {
    coord: Coord,
    depht: number
}



// Usage
const rows = 20;
const cols = 20;
const centerSize = 30;  // Size of the central area to fill with 2
const centerValue = 2;  // Value to fill the center with

// const grid = generateGrid(rows, cols, centerSize, centerValue);
printGrid(exampleGrid1)
let res = selectByColor(interestPoint1, exampleGrid1)
let arr = Array.from(res.elems).sort()
console.log("broo")
console.log(res.col)
console.log(arr)
// printGrid(res)
// Optionally, log a small section of the grid to verify
// console.log(grid.map(row => row));  // Displaying the top-left 10x10 portion of the grid



function print2DArray(array: number[][]): void {
    for (let row of array) {
      console.log(row.join(" "));
    }
  }
  

