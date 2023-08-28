/*********************************************************************** 
From LeetCode
122. Best Time to Buy and Sell Stock II
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
Date: 2023-08-27

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.


Constraints:
- 1 <= prices.length <= 3 * 104
- 0 <= prices[i] <= 104

*/

// Attempt Number: 1
// Logic: Using greedy algorithm, only consider the value of current and next element's value and add their margin if next is bigger than current.
// Time Complexity: O(n)

var maxProfit = function(prices) {
    let accum = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i-1]) {
            accum += (prices[i] - prices[i-1]);
        }
    }
    return accum;
};