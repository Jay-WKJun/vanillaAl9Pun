/*
  766. Toeplitz Matrix
  https://leetcode.com/problems/toeplitz-matrix/
  [easy]

  Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
  A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

  성공
*/

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
 var isToeplitzMatrix = function(matrix) {
  const result = matrix.every((row, x) => {
    return row.every((el, y) => {
      let cordinateX = x;
      let cordinateY = y;
      while(matrix.length > cordinateX && row.length > cordinateY) {
        if (el !== matrix[cordinateX][cordinateY]) {
          return false;
        }

        cordinateX++;
        cordinateY++;
      }

      return true;
    });
  });

  return result;
};

const matrix1 = [[1,2,3,4],[5,1,2,3],[9,5,1,2]];
console.log(isToeplitzMatrix(matrix1));
const matrix2 = [[1,2],[2,2]];
console.log(isToeplitzMatrix(matrix2));
