function eachCounter(number, limit) {
    let count = 1;
    
    return function myFunc() {
        count++;
        
        if (count >= limit) {
            return number;
        } else {
            return myFunc;
        }
    }
}

function getCurrentWeight(array) {
    if (array.length) {
        return array.reduce((a,b) => a + b);
    }
    return 0;
}

function solution(bridge_length, weight, truck_weights) {
    let count = 0;
    let currentWeight = 0;
    let truckPending = Array.from(truck_weights);
    let truckPassed = [];
    let passingFunc = [];
    
    while (truckPassed.length < truck_weights.length) {
        count++;
        let passed = false;
        
        if (passingFunc.length) {
            passingFunc = passingFunc.map(e => {
                if (typeof e === "function") {
                    return e();
                } else {
                    passed = true;
                    return e;  
                }
            });
            
            if (passed) {
                let leavingTruck = passingFunc.shift();
                truckPassed.push(leavingTruck);
                currentWeight -= leavingTruck;
            }
        }
        
        if (currentWeight + truckPending[0] <= weight) {
            let newTruck = truckPending.shift();
            currentWeight += newTruck;
            passingFunc.push(eachCounter(newTruck, bridge_length));
        }
    }
    
    return count;
}
