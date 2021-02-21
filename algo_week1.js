// 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
  const crossingList = [];
  let currentTick = 0;

  while (crossingList.length > 0 || truck_weights.length > 0) {
    // 1. 도착한 트럭 내리기 (다리 길이만큼 움직였을 때)
    if (crossingList.length !== 0 && crossingList[0][1] === bridge_length) {
      crossingList.shift();
    }

    // 2. 현재 다리 위에 있는 트럭의 총 무게 구하기
    let currentWeight = 0;
    for (let i = 0; i < crossingList.length; i++) {
      currentWeight += crossingList[i][0];
    }

    // 3. 무게 조건 비교하여 다음 트럭 올리기
    if (currentWeight + truck_weights[0] <= weight) {
      crossingList.push([truck_weights[0], 0]);
      truck_weights.shift();
    }

    // 4. 다리 위에 있는 트럭 한 칸 씩 밀기
    for (let i = 0; i < crossingList.length; i++) {
      crossingList[i][1]++;
    }

    // 5. 시간(틱) 한 칸 증가
    currentTick++;
  }

  return currentTick;
}
