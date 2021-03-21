/*
  sixshop 4번
*/

function coffeeMachine(N, coffeeTimes) {
  const coffeQueueTemplate = Array(N).fill(1);
  
  // 만약 1이면 그냥 그대로 리턴
  if (N === 1) {
    let count = 1;
    return Array(coffeeTimes.length).fill(1).map(() => count++);
  }
  
  let currentIndex = 0;
  let isQueueFull = true;
  const resultArr = [];

  // coffeQueue초기화
  let coffeQueue = coffeQueueTemplate.map(() => {
    return {
      key: currentIndex + 1,
      value: coffeeTimes[currentIndex++],
    }
  });

  do {
    // 만약 coffequeue가 비어있다면 채워 넣는다. coffeeTimes가 아직 남아있다면
    if (!isQueueFull && currentIndex < coffeeTimes.length) {
      while(coffeQueue.length < N || currentIndex < coffeeTimes.length) {
        coffeQueue.push({
          key: currentIndex + 1,
          value: coffeeTimes[currentIndex++],
        });
      }
    }

    // 하나씩 카운트 빼고 0이되면 제거
    for (let i = 0; i < coffeQueue.length; i++) {
      coffeQueue[i].value -= 1;
      if (coffeQueue[i].value === 0) {
        resultArr.push(coffeQueue[i].key);
        coffeQueue.splice(i, 1);
        isFull = false;
      }
    }
  } while (coffeQueue.length > 0);

  return resultArr;
}

const testN1 = 3;
const coffeeTimes1 = [4, 2, 2, 5, 3];

console.log(coffeeMachine(testN1, coffeeTimes1));

const testN2 = 1;
const coffeeTimes2 = [100, 1, 50, 1, 1];

console.log(coffeeMachine(testN2, coffeeTimes2));
