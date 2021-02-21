// Programmers
// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  let answer = 1;
  const classifyType = {};

  clothes.map((cloth) => {
    if (!classifyType[cloth[1]]) {
      classifyType[cloth[1]] = 1;
    } else {
      classifyType[cloth[1]] += 1;
    }
  });

  for (const type in classifyType) {
    answer *= classifyType[type] + 1;
  }

  return answer - 1;
}
