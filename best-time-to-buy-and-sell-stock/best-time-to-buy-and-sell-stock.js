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
    let min = Number.MAX_VALUE;
    let maxprofit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (min > prices[i]) {
            min = prices[i];
        }
        if (prices[i] - min > maxprofit) {
            maxprofit = prices[i] - min;
        }
    }
    return maxprofit;
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