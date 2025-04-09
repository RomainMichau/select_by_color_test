"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interestPoint4 = exports.interestPoint3 = exports.interestPoint2 = exports.interestPoint1 = exports.exampleGrid1 = void 0;
exports.generateGrid = generateGrid;
exports.serialize = serialize;
exports.printGrid = printGrid;
function generateGrid(rows, cols, centerSize, centerValue) {
    const grid = Array.from({ length: rows }, () => Array.from({ length: cols }, () => Math.floor(Math.random() * 10)));
    console.log(grid.map(row => row)); // Displaying the top-left 10x10 portion of the grid
    return grid;
}
function serialize(coord) {
    return `${coord.x},${coord.y}`;
}
const colorMap = {
    1: '\x1b[31m', // Red
    2: '\x1b[32m', // Green
    3: '\x1b[33m', // Yellow
    4: '\x1b[34m', // Blue
    5: '\x1b[35m', // Magenta
    6: '\x1b[36m', // Cyan
    7: '\x1b[37m', // White
    8: '\x1b[90m', // Bright Black
    9: '\x1b[91m', // Bright Red
    10: '\x1b[92m' // Bright Green
};
const resetColor = '\x1b[0m';
// Function to print the grid with colors
function printGrid(grid) {
    grid.forEach(row => {
        row.forEach(cell => {
            const color = colorMap[cell] || ''; // Default color if not found
            process.stdout.write(color + cell + resetColor + ' '); // Print with color
        });
        console.log(); // Move to the next line after each row
    });
}
exports.exampleGrid1 = [
    [
        1, 1, 1, 1, 0, 1, 2,
        4, 2, 8, 0, 4, 1, 9,
        7, 9, 5, 2, 1, 2
    ],
    [
        1, 1, 6, 4, 8, 3, 8,
        3, 2, 9, 7, 0, 4, 6,
        1, 9, 0, 3, 6, 5
    ],
    [
        2, 5, 5, 7, 9, 0, 7,
        2, 3, 5, 6, 7, 6, 4,
        9, 5, 8, 2, 9, 1
    ],
    [
        9, 2, 5, 8, 3, 0, 7,
        0, 3, 9, 7, 3, 7, 3,
        9, 8, 6, 5, 9, 8
    ],
    [
        6, 9, 4, 9, 2, 4, 0,
        4, 7, 9, 8, 0, 0, 9,
        0, 6, 3, 8, 2, 6
    ],
    [
        9, 3, 7, 0, 5, 7, 3,
        1, 0, 3, 9, 1, 9, 3,
        9, 3, 7, 1, 0, 6
    ],
    [
        5, 9, 8, 9, 0, 9, 2,
        4, 4, 8, 0, 3, 0, 6,
        5, 9, 7, 9, 4, 7
    ],
    [
        0, 7, 8, 4, 0, 2, 6,
        5, 8, 1, 4, 4, 3, 8,
        5, 2, 5, 0, 6, 6
    ],
    [
        7, 8, 9, 2, 1, 3, 7,
        9, 8, 8, 5, 9, 9, 8,
        7, 9, 6, 7, 3, 8
    ],
    [
        7, 8, 9, 1, 5, 6, 4,
        6, 6, 3, 4, 8, 5, 4,
        8, 5, 0, 8, 3, 8
    ],
    [
        5, 5, 1, 7, 4, 5, 5,
        9, 1, 0, 5, 9, 2, 4,
        2, 2, 2, 2, 5, 7
    ],
    [
        4, 0, 0, 3, 7, 5, 8,
        1, 9, 8, 6, 6, 2, 4,
        4, 2, 8, 6, 7, 3
    ],
    [
        9, 2, 9, 9, 6, 3, 4,
        6, 8, 7, 7, 7, 6, 3,
        5, 8, 7, 5, 5, 8
    ],
    [
        2, 8, 9, 0, 8, 5, 8,
        7, 3, 0, 7, 5, 9, 6,
        6, 4, 7, 1, 6, 4
    ],
    [
        8, 6, 8, 3, 2, 7, 3,
        0, 4, 7, 7, 7, 8, 4,
        6, 1, 0, 9, 7, 5
    ],
    [
        6, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7
    ],
    [
        4, 7, 6, 3, 9, 5, 9,
        8, 8, 8, 8, 6, 1, 3,
        2, 3, 4, 2, 0, 7
    ],
    [
        4, 4, 4, 9, 2, 3, 7,
        9, 0, 8, 3, 8, 4, 3,
        4, 4, 4, 8, 8, 8
    ],
    [
        4, 6, 4, 0, 5, 0, 3,
        7, 7, 5, 1, 6, 9, 7,
        1, 9, 3, 8, 8, 8
    ],
    [
        4, 4, 4, 0, 5, 6, 6,
        1, 8, 8, 1, 0, 0, 9,
        2, 8, 7, 8, 8, 8
    ]
];
exports.interestPoint1 = { x: 0, y: 0 };
exports.interestPoint2 = { x: 15, y: 2 }; // 7
// [
//   '12,10', '12,11', '12,9',  '13,10',
//   '14,10', '14,11', '14,18', '14,5',
//   '14,9',  '15,1',  '15,10', '15,11',
//   '15,12', '15,13', '15,14', '15,15',
//   '15,16', '15,17', '15,18', '15,19',
//   '15,2',  '15,3',  '15,4',  '15,5',
//   '15,6',  '15,7',  '15,8',  '15,9',
//   '16,1',  '16,19'
// ]
exports.interestPoint3 = { x: 19, y: 19 }; // 8
// [
//   '17,17', '17,18',
//   '17,19', '18,17',
//   '18,18', '18,19',
//   '19,17', '19,18',
//   '19,19'
// ]
exports.interestPoint4 = { x: 18, y: 1 }; // { elems: Set(1) { '18,1' }, col: 6 }
