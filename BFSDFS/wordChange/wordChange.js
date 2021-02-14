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
  let changeCount = 0;
  let beginCopy = begin.substring(0);
  let targetCopy = target.substring(0);
  let targetIndexInWords = -1;

  targetIndexInWords = words.findIndex((el) => {
    return el === target;
  });

  // words안에 target이 없으면 0리턴
  if (targetIndexInWords === -1) {
    return 0;
  }

  // (시간초과) => target 뒤의 단어들은 필요없으니 잘라버림
  const targetWord = words.splice(targetIndexInWords, 1);
  //words.splice(targetIndexInWords);
  words.push(targetWord[0]);
  changeCount = DFS(beginCopy, targetCopy, words, 0, 0);

  return changeCount;
}

function DFS(variableWord, target, words, index, count) {
  // base case: index가 끝났을 때 
  if (index >= words.length) {
    // 끝까지 왔는데 target과 일치하지 않는다...?
    return 0;
  }

  let wordChangeResult = 0;
  let notChangeResult = 0;
  const variableWordArr = variableWord.split('');
  const currentWordArr = words[index].split('');
  let differentIndex = -1;

  // 정말 하나만 다른지 체크, 아니면 바로 다음으로 넘어감
  for (let i = 0; i < variableWord.length; i++) {
    if (variableWordArr[i] !== currentWordArr[i]) {
      if (differentIndex === -1) differentIndex = i;
      else break;
      // (1번 case) => 만약 begin과 완전 같은 문자가 오면 재귀문 활성화x
    }
  }

  // 글자가 하나 틀릴때만 글자 변환 실행
  if (differentIndex !== -1) {
    variableWordArr[differentIndex] = currentWordArr[differentIndex];
    count++;
    const newWord = variableWordArr.join('');
    if (newWord === target) {
      // target과 일치하는 순간 바로 리턴
      return count;
    }

    // 바꿧을때 재귀들어가고 아닐 때 재귀 들어가서 서로 카운트 비교
    wordChangeResult = DFS(newWord, target, words, index + 1, count);
    notChangeResult = DFS(variableWord, target, words, index + 1, count - 1);
  } else {
    // (1번 case) => 글자가 begin과 완전 같을 경우 다음으로 넘어가지 않고 끝나버림 => 이곳에 다음으로 넘어가는 재귀문 이동
    notChangeResult = DFS(variableWord, target, words, index + 1, count);
  }

  if (wordChangeResult === 0 && notChangeResult === 0) {
    return 0;
  } else {
    wordChangeResult === 0 ? wordChangeResult = Number.MAX_VALUE : wordChangeResult;
    notChangeResult === 0 ? notChangeResult = Number.MAX_VALUE : notChangeResult;
    return Math.min(wordChangeResult, notChangeResult);
  }
}

console.log(solution(begin1, target1, words1));
console.log(solution(begin2, target2, words2));
console.log(solution(begin3, target3, words3));
console.log(solution(begin4, target4, words4));