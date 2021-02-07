/*
  https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
  가장 큰 수

  0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
  예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
  0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

  numbers의 길이는 1 이상 100,000 이하입니다.
  numbers의 원소는 0 이상 1,000 이하입니다.
  정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
*/

const test1 = [6, 10, 2];
const test2 = [3, 30, 34, 5, 9];

  // 큰 수가 앞자리로 와야함...
  // 가장 앞자리가 큰게 무조건 앞으로...
  // 같을 경우 뒷자리 계속 비교 -> 없을 경우... 가장 마지막 자리 것을 계속 비교
  
  // 패인... 하나하나 떼서 보는게 아니라 하나의 덩어리를 이어붙여보면 뭐가 큰 지 알 수 있다.
  // 문제에서도 하나의 덩어리를 붙인것을 원했으니

function solution(numbers) {
  const newNumArr = [...numbers];
    
  let answer = newNumArr.sort((a, b) => {
    //console.log('a = ', a, 'b = ', b);
    //console.log(('' + b + a) - ('' + a + b));
    return ('' + b + a) - ('' + a + b);
  }).join('');

  return answer[0] === '0' ? '0' : answer;
}

console.log(solution(test1));
console.log(solution(test2));