/*
  식스샵 3번 문제
*/

function solution(n) {
  // n은 옷가지 수
  const resultBoxCount = 0;

  if (n % 3 === 0 || n % 5 === 0) {
    return -1;
  }

  if (n % 5 === 0) {
    return n / 5;
  }

  if (n % 3 === 0) {
    return n / 3;
  }
};

const test1 = 15;
const test2 = 7;
console.log(solution(test1));
console.log(solution(test2));
