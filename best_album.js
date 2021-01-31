// 프로그래머스의 베스트앨범 문제 
// source: https://programmers.co.kr/learn/courses/30/lessons/42579
// 문제를 잘 잘 잘 읽자. 같은 plays를 갖지 않는 줄 알고, plays를 키값으로 줬다가 뒤집어 엎었다.

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function solution(genres, plays) {
    let pairs = {};
    let sums = {};
    let result = [];
    let order = [];
    
    genres.forEach((e, i) => {
        pairs[e] = pairs[e] || {};
        pairs[e][i] = plays[i];
    });
    
    for (const genre in pairs) {
        let eachSum = 0;
        for (const each in pairs[genre]) {
            eachSum += pairs[genre][each];
        }
        sums[genre] = eachSum;
    }
    
    let sumInOrder = Object.values(sums).sort((a, b) => b - a);
   
    for (let i = 0; i < sumInOrder.length; i++) {
        let genre = getKeyByValue(sums, sumInOrder[i]);
        let playsInOrder = Object.values(pairs[genre]).sort((a, b) => b - a);
     
        for (let j = 0; j < 2; j++) {
            if (playsInOrder[j]) {
                let entryKey = getKeyByValue(pairs[genre] ,playsInOrder[j]);
                result.push(Number(entryKey));
                pairs[genre][entryKey] = "used";
            }
        }
    }
    
    return result;
    
}