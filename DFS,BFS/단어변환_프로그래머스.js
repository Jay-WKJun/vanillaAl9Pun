function solution(begin, target, words) {
    let answer = 0;
    let pre = [begin];
    const rest = words.slice();
    
    if (!rest.includes(target)) {
        return answer;
    }
    
    while (rest.length) {
        const trans = [];
        
        answer ++;
        
        for (let preIndex = 0; preIndex < pre.length; preIndex++) {
            for (let restIndex = 0; restIndex < rest.length; restIndex++) {
                let count = 0;

                for(let i = 0; i < rest[restIndex].length; i++) {
                    if (rest[restIndex][i] === pre[preIndex][i]) {
                        count++;
                    }
                }

                if (count === rest[restIndex].length - 1) {
                    if (rest[restIndex] === target) {
                        return answer;
                    }

                    trans.push(...rest.splice(restIndex--, 1));
                }
            }
        }
        
        if (!trans.length) {
            return 0;
        }
        
        pre = trans;
    }
}