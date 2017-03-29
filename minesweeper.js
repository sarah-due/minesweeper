document.addEventListener('DOMContentLoaded', startGame)

//// Create Random board
var rowLength = 5;
var colLength = 5;
var board = {
  cells:[]
};


function startGame () {
  newBoard();
  lib.initBoard();
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  };
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
};


/// Set up new board
function newBoard() {
  for (var x = 0; x < rowLength; x++) {
    for (var y = 0; y < colLength; y++) {
      var newCell = {
          row: x,
          col: y,
          isMine: false,
          isMarked: false,
          hidden: true
        }
        board.cells.push(newCell);
    }
  }
  /// Plant the mines around the board
  var mineCount = 0;
  var maxMines = 4;
  while (mineCount < maxMines) {
    var randomCell = Math.floor(Math.random() * 25)
    if (!board.cells[randomCell].isMine) {
        board.cells[randomCell].isMine
          mineCount ++;
      }
  }
};

/// Code for winning and losing sound effects

function soundClip(type) {
  if (type==="win") {
  var audio = document.getElementsByTagName('audio')[0];
  audio.play();
} else if (type==="lose") {
  var audio = document.getElementsByTagName('audio')[1];
  audio.play();
  }
};



/// Checks for winning board each time through

function checkForWin () {
  var countMarked= 0;
    for (var i = 0; i < board.cells.length; i ++ ) {
      // if a cell is not a mine and is not hidden, add one to count
      if ((board.cells[i].isMine !== true) && (board.cells[i].hidden !== true)) {
        countMarked ++;
      // if a cell is a mine and has been marked, add one to count
      } else if (board.cells[i].isMine && board.cells[i].isMarked) {
        countMarked ++;
      // otherwise, add nothing to the count
      } else {
        return;
      }
    }
    //once all cells are marked or unhidden, count will add to 24 and a win!
    if (countMarked = 24) {
        lib.displayMessage('Donuts for everyone!');
        soundClip('win');
        }
}

/// Displays count for surrounding Mines

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
