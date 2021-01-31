/*
    121. Best Time to Buy and Sell Stock    
    https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

    You are given an array prices where prices[i] is the price of a given stock on the ith day.
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

const test1 = [7,1,5,3,6,4];
const test2 = [7,6,4,3,1];

var maxProfit = function(prices) {
    const pricesMap = new Map([...prices.entries()]);
    //min보다 늦으면서 가장 큰 값
    let maxPrice = [100000000000,0];
    //max 보다 앞서면서 가장 작은 값
    let minPrice = [-1,10000000];
    for (const [key, value] of pricesMap) {
        if (minPrice[0] < key && minPrice[1] > value) {
            if (maxPrice[0] > key && minPrice[1] !== value) {
                minPrice = [key, value];
            }
        }
        if (key > minPrice[0] && value > minPrice[1]) {
            if (maxPrice[1] < value) {
                maxPrice = [key, value];
            }
        }
    }
    console.log(minPrice, maxPrice);

    if (maxPrice[1] === 0) {
        return 0;
    }
    return maxPrice[1] - minPrice[1];
};

console.log("answer",maxProfit(test1));
console.log(maxProfit(test2));

/*
var maxProfit = function(prices) {
    let minPrice = 10000000;
    let maxPrice = 10000000;
    let maxProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        if (minPrice < prices[i]) {
            continue;
        }
        minPrice = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            if (maxPrice > prices[j] || prices[i] > prices[j]) {
                continue;
            }
            maxPrice = prices[j];
            maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
        }
    }

    return maxProfit;
};
*/