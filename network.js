// 프로그래머스 DFS/BFS
// https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript

function solution(n, computers) {
  // make graph
  const graph = {};
  let answer = 0;
  computers.map((item, index) => {
    graph[index] = [];
  });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (parseInt(computers[i][j])) {
        if (graph[i].indexOf(j) === -1) {
          graph[i].push(j);
        }
      }

      if (parseInt(computers[j][i])) {
        if (graph[j].indexOf(i) === -1) {
          graph[j].push(i);
        }
      }
    }
  }

  // make DFS
  function dfs(start) {
    if (!graph[start].length) {
      return;
    }

    while (graph[start].length) {
      const connectedNode = graph[start].pop();
      dfs(connectedNode);
    }
  }

  // do logic
  while (true) {
    let isEmpty = true;

    for (const key in graph) {
      if (graph[key].length) {
        answer++;
        isEmpty = false;
        dfs(key);
      }
    }

    if (isEmpty) {
      break;
    }
  }

  return answer;
}

const n1 = 3;
const computers1 = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
const result1 = solution(n1, computers1);
console.log(result1);

const n2 = 3;
const computers2 = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
];
const result2 = solution(n2, computers2);
console.log(result2);
