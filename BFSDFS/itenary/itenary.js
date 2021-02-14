/*
  https://programmers.co.kr/learn/courses/30/lessons/43164?language=javascript
  여행경로

  주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 ICN 공항에서 출발합니다.
  항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

    모든 공항은 알파벳 대문자 3글자로 이루어집니다.
    주어진 공항 수는 3개 이상 10,000개 이하입니다.
    tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
    주어진 항공권은 모두 사용해야 합니다.
    만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
    모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.
*/
const tickets1 = [["ICN", "JFK"], ['HND', 'IAD'], ['JFK', 'HND']];

const tickets2 = [['ICN', 'SFO'], ['ICN', 'ATL'], ['SFO', 'ATL'], ['ATL', 'ICN'], ['ATL','SFO']];

// 출발지가 여러개 일 때, 뒤의 알파벳을 따져서 가야함.

function solution(tickets) {
  let answer = [];
  const tickesMap = new Map();

  tickets.forEach((el) => {
    if (tickesMap.has(el[0])) {
      const value = tickesMap.get(el[0]);
      value.push(el[1]);
      value.sort((a, b) => {
        if (a < b) {
          return -1;
        }

        return 1;
      });
      tickesMap.set(el[0], value);
    } else {
      tickesMap.set(el[0], [el[1]]);
    }
  });

  const iCNval = tickesMap.get("ICN");

  answer = findItenary(tickesMap, "ICN", answer)

  return answer;
}

function findItenary(tickesMap, start, answer) {
  if (!tickesMap.has(start)) {
    return;
  }

  answer.push(start);
  const arrivals = tickesMap.get(start);
  let index = 0;
  do {
    const arrival = arrivals.splice(index, 1);
    returnVal = findItenary(tickesMap, arrival[0], answer);
    if (returnVal) {
      break;
    }
    index++;
  } while(returnVal && index <= arrivals.length)

  const arrival = arrivals.splice(arrivalIndex, 1);
  if (arrivals.length === 0) {
    tickesMap.delete(answer[answer.length - 1])
  }

  if (tickesMap.size <= 0) {
    answer.push(end);
  }

  return answer;
}

console.log(solution(tickets1));
console.log(solution(tickets2));