/*
  Minesweeper
  You are given a 2D char matrix representing the game board. 'M' represents an unrevealed mine, 'E' represents an unrevealed empty square, 'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, digit ('1' to '8') represents how many mines are adjacent to this revealed square, and finally 'X' represents a revealed mine.

  Now given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'), return the board after revealing this position according to the following rules:

    If a mine ('M') is revealed, then the game is over - change it to 'X'.
    
    If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.

    If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
    
    Return the board when no more squares will be revealed.

    M - 드러나지 않은 지뢰
    E - 드러나지 않은 빈칸
    B - 드러난 아무것도 없는 곳
    숫자 - 주변의 지뢰갯수를 알려줌
    X - 드러난 지뢰

    특정지역을 클릭하면 그곳의 주변을 모두 드러내야함
    만약 드러난 곳 주변에 B가 있다면 재귀적으로 모든 주변의 B를 드러내야함
*/
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  const cordinateX = click[0];
  const cordinateY = click[1];
  if (board[cordinateX][cordinateY] === "M") {
    board[cordinateX][cordinateY] = "X";
    return board;
  }

  for (let i = cordinateX - 1; i <= cordinateX + 1; i++ ) {
    if (i < 0 || i >= board.length) continue;
    for (let j = cordinateY - 1; j <= cordinateY + 1; j++) {
      if (j < 0 || j >= board[i].length) continue;
      if (board[i][j] !== 'E') continue;
      board[i][j] = checkAround(board, i, j);
      if (board[i][j] === 'B') updateBoard(board, [i, j]);
    }
  }

  return board;
};

// 주변에 뭐가 있는지 확인, 지뢰가 있다면 숫자를 반환 아니면 B를 반환한다.
function checkAround(board, targetX, targetY) {
  let countMines = 0;
  for (let i = targetX - 1; i <= targetX + 1; i++ ) {
    if (i < 0 || i >= board.length) continue;
    for (let j = targetY - 1; j <= targetY + 1; j++) {
      if (j < 0 || j >= board[i].length) continue;
      if (board[i][j] === 'M') countMines++;
    }
  }

  if (countMines === 0) return 'B';
  return String(countMines);
}

const borad1 = [["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]];
const click1 = [3,0];
console.log(updateBoard(borad1, click1));
