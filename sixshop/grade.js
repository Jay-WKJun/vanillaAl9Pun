/*
  두번째 문제
*/

function solution(grades) {
  const newGrades = grades.map((el, i) => {
    return {
      key: i,
      value: el,
    }
  });

  newGrades.sort((a, b) => {
    if (a.value > b.value) {
      return -1;
    } else if (a.value < b.value) {
      return 1;
    } else {
      return 0;
    }
  });

  const resultArr = Array(grades.length);
  let beforeVal = -1;
  let sameGrade = -1;
  newGrades.forEach((el, i) => {
    if (beforeVal === el.value) return resultArr[el.key] = sameGrade;

    resultArr[el.key] = i + 1;
    sameGrade = i + 1;
    beforeVal = el.value;
  });

  return resultArr;
}

const grade1 = [2,2,1];
const grade2 = [3,2,1,2];
console.log(solution(grade1));
console.log(solution(grade2));
