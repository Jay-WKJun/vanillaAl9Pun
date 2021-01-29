/*
    https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript    
    위장

    스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

    예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.
    스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

        clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
        스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
        같은 이름을 가진 의상은 존재하지 않습니다.
        clothes의 모든 원소는 문자열로 이루어져 있습니다.
        모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
        스파이는 하루에 최소 한 개의 의상은 입습니다.

*/

const test1 = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];

const test2 = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]];

console.log(solution(test1));

console.log(solution(test2));

function solution(clothes) {
    var answer = 0;
    let combinationLimit = 2;
    let countAllclothes = 0;
    let countAllCombination = 0;
    let clothesMap = new Map();
    clothes.forEach((el) => {
        countAllclothes += 1;
        const whichClothe = el[1];
        if (clothesMap.has(whichClothe)) {
            const valueArray = clothesMap.get(whichClothe);
            valueArray.push(el[0]);
            clothesMap.set(whichClothe, valueArray);
        } else {
            clothesMap.set(whichClothe, [el[0]]);
        }
    });

    

    // 각 종류의 의상은 하나씩만, 최소 하나는 입는다. 입을 수도 안입을수도 있다.

    

    return answer;
}

function calculateCombination (map, totalLength, combLimit) {
    // 조합 계산법 : 5C2 = (5 * 4) / (2 * 1)
    const upperResult = 1;
    const downResult = 1;
    let counter = 0;

    while (counter < combLimit) {
        const upper = totalLength - counter;
        const down = counter + 1;

        const upperValueLength = map.get(upper);
        const downValueLength = map.get(down);



        counter+=1;
    }

}

/*
function solution(clothes) {
    const result =
       Object.values(
           clothes.reduce(
               (count, [cloth, type]) => {
                   count[type] = count[type] + 1 || 2; // 타입이 있다면 해당 타입을 벗는 경우를 포함.
                   return count;
               },
               {}
           )
       ).reduce((sum, num) => sum * num);
    return result - 1; // 모두 벗는 경우(...)는 제외
}
*/