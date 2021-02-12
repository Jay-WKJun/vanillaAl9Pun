/*
  https://leetcode.com/problems/count-square-submatrices-with-all-ones/
  1277. Count Square Submatrices with All Ones

  Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

  fail........
*/

const test1 = [
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
];

const test2 = [
  [1,0,1],
  [1,1,0],
  [1,1,0]
];

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  //각 위치에서 만들 수 있는 사각형을 같은 좌표에 저장한다.
  //만약 모두 1 이상이면 확장 가능 판단하고 확장해서 1인지 확인한다.
  const dpArray = [[]];
  for (let i = 0; i < matrix.length + 1; i++) {
    for (let j = 0; j < matrix[i].length + 1; j++) {
      dpArray[i][j] = 0;
    }
  }
  matrix.map((innerArray, yIndex) => {
    innerArray.map((el, xIndex) => {
      if (el === 1) {
        dpArray[yIndex + 1][xIndex + 1]++;
      }
    })
  })
};

function inspectSquare(matrix) {
  matrix[i][j];
}