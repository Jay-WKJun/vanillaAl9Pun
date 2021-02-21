/*
  https://programmers.co.kr/learn/courses/30/lessons/43163?language=javascript
  단어 변환

  두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

  1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
  2. words에 있는 단어로만 변환할 수 있습니다.
  예를 들어 begin이 hit, target가 cog, words가 [hot,dot,dog,lot,log,cog]라면 hit -> hot -> dot -> dog -> cog와 같이 4단계를 거쳐 변환할 수 있습니다.

  두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

    각 단어는 알파벳 소문자로만 이루어져 있습니다.
    각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
    words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
    begin과 target은 같지 않습니다.
    변환할 수 없는 경우에는 0를 return 합니다.
*/

const begin1 = 'hit';
const target1 = 'cog';
const words1 = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
const begin2 = 'hit';
const target2 = 'cog';
const words2 = ['hot', 'dot', 'dog', 'lot', 'log'];
const begin3 = 'hot';
const target3 = 'lot';
const words3 =  ['hot', 'dot', 'dog', 'lot', 'log'];
// (3번 case 대응) 순서 상관없이 되어야함
const begin4 = 'hit';
const target4 = 'cog';
const words4 = ['cog', 'dog', 'hot', 'dot', 'lot', 'log'];

function solution(begin, target, words) {
  // 다돌았는데 target과 일치하지 않음 = 0 리턴
  // target 언어가 있어도 도달할 수 없다면 0이 리턴되야함
  let wordCanChangeQueue = [];
  let currentWord = {word: begin, count: 0};
  
  wordCanChangeQueue = wordCanChangeQueue.concat(findOneLetterDiffWords(currentWord, words));

  while (wordCanChangeQueue.length) {
    // 가장 선두에 있는 오브젝트를 뺌
    const currentObj = wordCanChangeQueue.shift();
    const currentWord = currentObj.word;
    const deleteIndex = words.findIndex((el) => (el === currentWord));
    words.splice(deleteIndex, 1);
    if (currentWord === target) {
      return currentObj.count;
    }

    // 다시 하나만 바꿀 수 있는 것들을 큐에 넣는다.
    wordCanChangeQueue = wordCanChangeQueue.concat(findOneLetterDiffWords(currentObj, words));

  }

  return 0;
}

function findOneLetterDiffWords(currentWord, words) {
  const returnArr = [];
  const currentWordArr = currentWord.word.split('');
  const changeCount = currentWord.count + 1;

  words.forEach((el) => {
    const elArr = el.split('');
    let diffCount = 0;
    for (let i = 0; i < currentWordArr.length; i++) {
      if (currentWordArr[i] !== elArr[i]) {
        diffCount++;
      }
    }

    if (diffCount === 1) {
      returnArr.push({word: el, count: changeCount});
    }
  });

  return returnArr;
}

console.log(solution(begin1, target1, words1));
console.log(solution(begin2, target2, words2));
console.log(solution(begin3, target3, words3));
console.log(solution(begin4, target4, words4));