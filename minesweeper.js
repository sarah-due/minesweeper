document.addEventListener('DOMContentLoaded', startGame)

var board = {
  cells: [ { row: 0,
             col: 0,
             isMine: true,
             hidden: true },

           { row: 0,
             col: 1,
             isMine: false,
             hidden: true },

           { row: 0,
             col: 2,
             isMine: false,
             hidden: true },

           { row: 0,
             col: 3,
             isMine: false,
             hidden: true },

           { row: 0,
             col: 4,
             isMine: false,
             hidden: true },

           { row: 1,
             col: 0,
             isMine: false,
             hidden: true },

           { row: 1,
             col: 1,
             isMine: true,
             hidden: true },

           { row: 1,
             col: 2,
             isMine: false,
             hidden: true },

           { row: 1,
             col: 3,
             isMine: false,
             hidden: true },

           { row: 1,
             col: 4,
             isMine: false,
             hidden: true },

           { row: 2,
             col: 0,
             isMine: false,
             hidden: true },

           { row: 2,
             col: 1,
             isMine: true,
             hidden: true },

           { row: 2,
             col: 2,
             isMine: false,
             hidden: true },

           { row: 2,
             col: 3,
             isMine: false,
             hidden: true },

           { row: 2,
             col: 4,
             isMine: false,
             hidden: true },

           { row: 3,
             col: 0,
             isMine: false,
             hidden: true },

           { row: 3,
             col: 1,
             isMine: false,
             hidden: true },

           { row: 3,
             col: 2,
             isMine: false,
             hidden: true },

           { row: 3,
             col: 3,
             isMine: false,
             hidden: true },

           { row: 3,
             col: 4,
             isMine: false,
             hidden: true },

           { row: 4,
             col: 0,
             isMine: false,
             hidden: true },

           { row: 4,
             col: 1,
             isMine: false,
             hidden: true },

           { row: 4,
             col: 2,
             isMine: false,
             hidden: true },

           { row: 4,
             col: 3,
             isMine: true,
             hidden: true },

           { row: 4,
             col: 4,
             isMine: false,
             hidden: true }
         ]
       };



function startGame () {
  lib.initBoard();
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
    console.log(board.cells[i].surroundingMines);
  };
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
};

var flip = $("#woosh")[0];

$('div').click(function() {
 flip.play();
});
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var countMarked= 0;
    for (var i = 0; i < board.cells.length; i ++ ) {
      if ((board.cells[i].isMine !== true) && (board.cells[i].hidden !== true)) {
        countMarked ++;
      } else if (board.cells[i].isMine && board.cells[i].isMarked) {
        countMarked ++;
      } else {
        return;
      }
    }
    if (countMarked = 24) {
        lib.displayMessage('Donuts for everyone!');
        }
  //   lib.displayMessage('You win!')
}



// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.



function countSurroundingMines (cell) {
  var count= 0;
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
    for (var i=0; i < surroundingCells.length; i++){
      if (surroundingCells[i].isMine == true) {
        count ++;
      }
    }
    return count;
};

console.log(count);
