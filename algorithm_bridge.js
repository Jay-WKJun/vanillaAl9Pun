function solution(bridge_length, weight, truck_weights) {
  let truckOnBridge = []; // 다리위 트럭 목록
  let truckWeights = truck_weights.concat();
  let time = 0; // 시간
  let bridgeWeight = 0; // 현재 다리 위 무게
  
  while (truckWeights.length > 0 || truckOnBridge.length > 0) {
      const truck = truckWeights[0]; // 첫 번째 트럭을 지정
      time++; // 시간을 1 상승
      
      if (truckOnBridge[0] && (truckOnBridge[0].time + bridge_length) === time) {
          // 이 조건문이 맞으면 다리를 건넘
          bridgeWeight -= truckOnBridge.shift().weight; // 첫번째 목록의 weight를 뻄
      }
      
      if (weight >= (bridgeWeight + truck)) {
          bridgeWeight += truck; // 트럭을 브릿지에 올림
          truckOnBridge.push({time: time, weight: truck}); //현재의 시간과 무게를 가진 객체 푸시
          truckWeights.shift(); // 여기서 대기 트럭의 첫번째를 지움(즉 브릿지에 올라감)
      }
  }

  return time;
}
// 다리를 지나는 트럭_ 김탁현
// 주석은 따로 삭제하지 않았습니다.