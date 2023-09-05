/*********************************************************************** 
From LeetCode
274. H-Index
https://leetcode.com/problems/h-index
Date: 2023-09-04

Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

Example 1:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

Constraints:
- n == citations.length
- 1 <= n <= 5000
- 0 <= citations[i] <= 1000
*/

// Attempt Number: 1
// Logic:
// Time Complexity: O(n)

var hIndex = function(citations) {
    const sorted = arrs.sort((a, b) => b - a);
    let sum = sorted.reduce(function(a, b){ return a + b });
    
    return Math.floor(sum/citations.length);
};
// the total number of publications and the total number of citations to those works
// let c =[3,0,6,1,5] -> [6,5,3,1,0]
// number of publications = 5, the total number of citations = 15
// h-index = 3 
// let c =[1,3,1] -> [3,1,1]
// number of publications = 3, the total number of citations = 5
// h-index = 1 
// get average