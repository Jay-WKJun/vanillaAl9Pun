// 문제: https://programmers.co.kr/learn/courses/30/lessons/43163?language=javascript#
// BFS로 풀었당.

function getOneDiffWords(wordObj, words) {
    let result = [];
    const { word, level } = wordObj;
    const nextLevel = level + 1;
    
    words.forEach(each => {
        let countDiff = 0;

        for (let i = 0; i < each.length; i++) {
            if (countDiff > 1) {
                return;
            }
            
            if (each[i] !== word[i]) {
                countDiff++;
            }
        }

        if (countDiff === 1) {
            result.push({ word: each, level: nextLevel });
        }
    });

    return result;
}

function findTarget(oneDiffWords, target) {
    for (let i = 0; i < oneDiffWords.length; i++) {
        if (oneDiffWords[i].word === target) {
            return [true, oneDiffWords[i].level];
        }
    }
    return [false];
}

function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }
    
    let wordList = [...words];
    let current = { word: begin, level: 0 };
    let oneDiffWords =  getOneDiffWords(current, wordList);
    
    while(oneDiffWords.length) {
        let [haveTarget, level] = findTarget(oneDiffWords, target);
        
        if (haveTarget) {
            return level;
        }
        
        current = oneDiffWords.shift();
        wordList = wordList.filter(each => each !== current.word);
        oneDiffWords.push(...getOneDiffWords(current, wordList));
    }
}
