// 프로그래머스 DFS/BFS
// https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript

function solution(numbers, target) {
  let answer = 0;

  function checkCurrent(numberList, target, currentValue) {
    if (!numberList.length) {
      if (currentValue === target) {
        answer++;
      }
      return;
    }

    const currentNumber = numberList.pop();
    const currentPlus = currentValue + currentNumber;
    const currentMinus = currentValue - currentNumber;
    const numberListPlus = [...numberList];
    const numberListMinus = [...numberList];

    checkCurrent(numberListPlus, target, currentPlus);
    checkCurrent(numberListMinus, target, currentMinus);
  }

  checkCurrent(numbers, target, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
