/*
  https://programmers.co.kr/learn/courses/30/lessons/42895
  N으로 표현

  아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.

  12 = 5 + 5 + (5 / 5) + (5 / 5)
  12 = 55 / 5 + 5 / 5
  12 = (55 + 5) / 5

  5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
  이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.

    N은 1 이상 9 이하입니다.
    number는 1 이상 32,000 이하입니다.
    수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
    최솟값이 8보다 크면 -1을 return 합니다.

*/

const N1 = 5;
const number1 = 12;
const N2 = 2;
const number2 = 11;

const memoize = new Map();

function solution(N, number) {
  var answer = 0;
  answer = nRecursion(N, 0, 0, N, number);
  return answer;
}

function nRecursion(N, total, count, numberBefore, targetNum) {
  // 성공케이스
  if (total === targetNum) {
    return count;
  }

  // 실패케이스
  if (count > 8 || total > targetNum) {
    return;
  }

  // 숫자를 합쳐서 다음으로 넘어가는 경우
  const combinatedNum = (numberBefore * 10) + N;
  const combReturn = nRecursion(N, total, count, combinatedNum, targetNum);

  // 덧, 뺄, 곱, 나 한번씩
  const sumReturn = nRecursion(N, total + N, count + 1, N, targetNum);
  const subReturn = nRecursion(N, total - N, count + 1, N, targetNum);
  const mulReturn = nRecursion(N, total * N, count + 1, N, targetNum);
  const divReturn = nRecursion(N, total / N, count + 1, N, targetNum);

  // 다 해서 오는 애들 중에 가장 count가 적은걸 return
  return Math.min(combReturn, sumReturn, subReturn, mulReturn, divReturn);
}

console.log(solution(N1, number1));
console.log(solution(N2, number2));

/*
  실패케이스 (시간초과)

  const memoize = new Map();

function solution(N, number) {
  var answer = 0;
  answer = nRecursion(N, 0, 0, N, number);
  return answer;
}

function nRecursion(N, total, count, numberBefore, targetNum) {
  // 성공케이스
  if (total === targetNum) {
    return count;
  }

  // 실패케이스
  if (count > 8 || total > targetNum) {
    return;
  }

  // 숫자를 합쳐서 다음으로 넘어가는 경우
  const combinatedNum = (numberBefore * 10) + N;
  const combReturn = nRecursion(N, total, count, combinatedNum, targetNum);

  // 덧, 뺄, 곱, 나 한번씩
  const sumReturn = nRecursion(N, total + N, count + 1, N, targetNum);
  const subReturn = nRecursion(N, total - N, count + 1, N, targetNum);
  const mulReturn = nRecursion(N, total * N, count + 1, N, targetNum);
  const divReturn = nRecursion(N, total / N, count + 1, N, targetNum);

  // 다 해서 오는 애들 중에 가장 count가 적은걸 return
  return Math.min(combReturn, sumReturn, subReturn, mulReturn, divReturn);
}
*/

/* Java
  성공한 코드
class Solution {
  public int solution(int N, int number) {
  int answer = -1;
      List<Set<Long>> arr = new ArrayList<>();

      arr.add(null);
      arr.add(new HashSet<>());

      arr.get(1).add(new Long(N));

      for(int i=1; i<8; i++){
          if(i>=2){
              arr.add(new HashSet<>());

              StringBuilder num = new StringBuilder();
              for(int j=0;j<i;j++) {
                  num.append(N);
              }
              arr.get(i).add(Long.parseLong(num.toString()));

              for(int j=1; j<i; j++ ){               
                  for(long k : arr.get(j)){
                      for(long l : arr.get(i-j)){
                          arr.get(i).add(k+l);
                          arr.get(i).add(k-l);
                          arr.get(i).add(k*l);
                          if(l!=0){
                              arr.get(i).add(k/l);
                          }
                      }
                  }
              }                
          }

          if(arr.get(i).contains((long)number)){
              return i;
          }
      }
      return answer;
  }
}
*/