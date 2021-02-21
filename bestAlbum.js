// Programmers
// https://programmers.co.kr/learn/courses/30/lessons/42579?language=javascript

function solution(genres, plays) {
  const answer = [];
  const filtered = {};
  const sortByPlays = [];

  // genre 배열 1바퀴 순회하며 filtered 객체에 담는 과정

  // filtered 객체의 프로퍼티 형태는
  // classic : { list: [{index: 1, play: 300}], sum: 1500 }
  for (let i = 0; i < genres.length; i++) {
    // 처음 들어온 값은 위의 프로퍼티 형태로 삽입
    if (!filtered.hasOwnProperty(genres[i])) {
      filtered[genres[i]] = {
        list: [{ index: i, play: plays[i] }],
        sum: plays[i],
      };
    } else {
      // 기존 존재하는 프로퍼티는 아래와 같이 처리
      // 1. 장르 재생 sum 합산
      filtered[genres[i]].sum += plays[i];
      // 2. 장르별 list에 삽입
      filtered[genres[i]].list.push({ index: i, play: plays[i] });
      // 3. 장르별 list 정렬
      filtered[genres[i]].list.sort((a, b) => {
        const compare = b.play - a.play;

        return compare === 0 ? a.index - b.index : compare;
      });
      // 4. 장르에 list가 2개 넘어가면 없앰 (런타임 축소)
      if (filtered[genres[i]].list.length > 2) {
        filtered[genres[i]].list.pop();
      }
    }
  }

  // 장르를 재생순으로 정렬하기 위해 sortByPlays 배열을 활용
  for (const genre in filtered) {
    sortByPlays.push([genre, filtered[genre].list, filtered[genre].sum]);
  }

  sortByPlays.sort((a, b) => b[2] - a[2]);

  // 재생순으로 정렬된 장르를 최종 answer에 삽입함
  for (const genre of sortByPlays) {
    for (let i = 0; i < genre[1].length; i++) {
      answer.push(genre[1][i].index);
    }
  }

  return answer;
}
