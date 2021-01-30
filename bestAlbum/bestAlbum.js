/*
    https://programmers.co.kr/learn/courses/30/lessons/42579?language=javascript
    베스트 앨범

    스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

        속한 노래가 많이 재생된 장르를 먼저 수록합니다.
        장르 내에서 많이 재생된 노래를 먼저 수록합니다.
        장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

    노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.
*/

const genre1 = ["classic", "pop", "classic", "classic", "pop"];
const play1 = [500, 600, 150, 800, 2500];

console.log(solution(genre1, play1));

function solution(genres, plays) {
    var answer = [];
    const musicMap = new Map();
    const musicIndexMap = new Map();
    genres.map((genre, index) => {
        if (musicMap.has(genre)) {
            const temp = musicMap.get(genre);
            musicMap.set(genre, plays[index] + temp);
            const valueArray = musicIndexMap.get(genre);
            valueArray.set(index, plays[index]);
            musicIndexMap.set(genre, valueArray);
        } else {
            musicMap.set(genre, plays[index]);
            const valueMap = new Map();
            valueMap.set(index, plays[index]);
            musicIndexMap.set(genre, valueMap);
        }
    });

    const sortedMusicMap = new Map([...musicMap.entries()].sort((a, b) => {
        if (a[1] > b[1]) {
            return -1;
        }
        
        return 1;
    }));
    const sortedKeys = sortedMusicMap.keys();
    for (let genre of sortedKeys) {
        const genresValueMap = musicIndexMap.get(genre);
        const sortedValueMap = new Map([...genresValueMap.entries()].sort((a, b) => {
            if (a[1] > b[1]) {
                return -1;
            }

            return 1;
        }));
        const sortedMusicIndex = Array.from(sortedValueMap.keys());
        if (sortedMusicIndex.length === 1) {
            answer.push(sortedMusicIndex[0]);
        } else {
            answer.push(sortedMusicIndex[0]);
            answer.push(sortedMusicIndex[1]);
        }
    }

    return answer;
}