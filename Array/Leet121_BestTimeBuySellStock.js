/*********************************************************************** 
From LeetCode
121. Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
Date: 2023-07-28

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Constraints:
- 1 <= prices.length <= 105
- 0 <= prices[i] <= 104

*/

// Attempt Number: 1
// Logic: Get and store profit from next maximum value - min value and return it.
// Time Complexity: O(n)

var maxProfit = function(prices) {
    let min = prices[0]; 
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++) {
        if(min < prices[i]) {
            let profit = prices[i] - min;
            maxProfit = Math.max(maxProfit, profit);   
        }
        else  {
            min = prices[i]
        }
    }
    return maxProfit;
};