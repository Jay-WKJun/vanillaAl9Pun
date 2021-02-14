// https://programmers.co.kr/learn/courses/30/lessons/43163
// 1) charAt
// 2) split -> splice -> join
// bfs -> shift / dfs -> pop / 재귀 -> dfs
const be = 'hit';
const tar = 'cog';
const words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];

function solution(begin, target, words) {
// 한 번에 한 개의 알파벳이 바뀐 단어를 각각의 노드로 생각
  const queue = [];
  const visited = [];

  queue.push(begin);

  while (queue.length > 0) {
    const word = queue.pop();

    if (target === word) {
      return visited.length;
    }

    visited.push(word);

    for (let i = 0; i < word.length; i++) {
      const pattern = sliceWords(word, i);

      words.forEach(elem => {
        if (
          visited.includes(elem) === false
          && sliceWords(elem, i) === pattern
        ) {
          queue.push(elem);
        }
      });
    }
  }

  return 0;
}

function sliceWords(word, i) {
  const char = word.split('');
  char.splice(i, 1);
  return char.join('');
}

const result = solution(be, tar, words);

console.log(result);
