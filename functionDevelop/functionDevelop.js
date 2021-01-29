/*
    https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

    프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

    또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

    먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

    ★refactoring topic : 하루씩 각각 더해서 진행하는게 아니라, 한번에 릴리스 할 수 있는 기능을 한번에 구할 수 있다.
*/

let progresses1 = [93, 30, 55];
let progresses2 = [95, 90, 99, 99, 80, 99];

let speed1 = [1, 30, 5];
let speed2 = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses1, speed1));
console.log(solution(progresses2, speed2));

solution(progresses1, speed1);

function solution(progresses, speeds) {
    //index가 끝났을 때, index + 1이 아직 안끝났다면 배포!
    //index + 1이 끝났는 데 index가 아직 안끝났다면 기다림...

    let releaseFuncs = 0;
    let result = [];

    while (progresses.length > 0) {
        //하루가 지나감...
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] = progresses[i] + speeds[i];
        }

        console.log(progresses);

        if (progresses[0] >= 100) {
            releaseFuncs++;
            progresses.shift();
            speeds.shift();
            while (progresses[0] >= 100) {
                releaseFuncs++; 
                progresses.shift();
                speeds.shift();
            }
            result.push(releaseFuncs);
            releaseFuncs = 0;
        }
    }

    return result;
};