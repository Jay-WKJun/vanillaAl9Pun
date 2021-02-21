// 프로그래머스 DFS/BFS
// https://programmers.co.kr/learn/courses/30/lessons/43163?language=javascript

function solution(begin, target, words) {
  // filter false case
  if (words.indexOf(target) === -1) {
    return 0;
  }

  // make graph
  const graph = {};
  words.push(begin);
  words.map((word) => (graph[word] = []));

  for (const key in graph) {
    for (const word of words) {
      let letterCount = 0;

      for (let i = 0; i < word.length; i++) {
        if (word[i] === key[i]) {
          letterCount++;
        }
      }

      if (letterCount === word.length - 1) {
        graph[key].push(word);
      }
    }
  }

  // do BFS
  function bfs(start) {
    let path = 0;
    const queue = [[start, path]];
    const visited = [start];

    while (queue.length) {
      const currentQueue = queue.shift();
      const currentWord = currentQueue[0];
      const currentPath = currentQueue[1];
      const currentConnected = graph[currentWord];
      const isLastBreadth =
        queue.length && currentPath === queue[queue.length - 1][1];

      if (!queue.length || isLastBreadth) {
        path++;
      }

      for (const word of currentConnected) {
        if (word === target) {
          return path;
        }

        if (visited.indexOf(word) === -1) {
          visited.push(word);
          queue.push([word, path]);
        }
      }
    }
  }

  const result = bfs(begin);
  return result;
}

const begin1 = "hit";
const target1 = "cog";
const words1 = ["hot", "dot", "dog", "lot", "log", "cog"];
const solution1 = solution(begin1, target1, words1);
console.log(solution1);

// const begin2 = "hit";
// const target2 = "cog";
// const words2 = ["hot", "dot", "dog", "lot", "log"];
// const solution2 = solution(begin2, target2, words2);

// console.log(solution1, solution2);
