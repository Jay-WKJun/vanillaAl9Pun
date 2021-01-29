/*
    https://programmers.co.kr/learn/courses/30/lessons/42583
    다리를 지나는 트럭

    트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
    ※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

    예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

    solution 함수의 매개변수로 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

    bridge_length는 1 이상 10,000 이하입니다.
    weight는 1 이상 10,000 이하입니다.
    truck_weights의 길이는 1 이상 10,000 이하입니다.
    모든 트럭의 무게는 1 이상 weight 이하입니다.
*/

const bridgeLength1 = 2;
const weight1 = 10;
const truckWeight1 = [7,4,5,6];

console.log(solution(bridgeLength1, weight1, truckWeight1));

const bridgeLength2 = 100;
const weight2 = 100;
const truckWeight2 = [10];

console.log(solution(bridgeLength2, weight2, truckWeight2));

function solution(bridge_length, weight, truck_weights) {
    
    const bridge = [];
    let bridgeWeightTotal = 0;
    let days = 0;

    function isTruckCanGo (truck_weight) {
        return (bridge.length + 1) <= bridge_length && (bridgeWeightTotal + truck_weight) <= weight;
    }
    
    while (true) {
        // 탈출 조건, 트럭이 다 지나가고 다리에서도 모두 지나가면
        if (bridge.length === 0 && truck_weights.length === 0) {
            break;
        }
        days++;
        // 트럭이 진행하고 빠지는 처리
        if (bridge.length > 0) {
            // 다리의 차량이 얼마나 진행했는가...는 어떻게 할것이냐 -> 배열로 묶자. [진행일, 트럭 무게]
            for (let i = 0; i < bridge.length; i++) {
                // 다리 하나씩 진행
                bridge[i][0]++;
                // 다리 길이보다 더 진행했다면... 다리에서 빠져나간다
                if (bridge[i][0] > bridge_length) {
                    bridgeWeightTotal -= bridge.shift()[1];
                    i = -1;
                }
            }
        }
        // 진입 처리
        // 진입가능할 경우 = 들어올 트럭의 갯수를 더했을 때 다리의 길이보다 적은 수의 트럭, 들어올 트럭의 무게를 더했을 때 다리의 한계중량보다 적어야함
        if (isTruckCanGo(truck_weights[0])) {
            //트럭 진입
            const truckWeight = truck_weights.shift()
            bridge.push([1, truckWeight]);
            bridgeWeightTotal += truckWeight;
        }
    };

    return days;
}