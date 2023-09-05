/*********************************************************************** 
From LeetCode
274. H-Index
https://leetcode.com/problems/h-index
Date: 2023-09-05

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
// Logic: First sort the citations in descending order and count up h-index variable 'h' if current citation is greater than or equal to the value of h.
// Time Complexity: O(n)

var hIndex = function(citations) {
    const sorted = citations.sort((a, b) => b - a);
    let h = 0;
    while (h < sorted.length && sorted[h] >= h+1) {
        h += 1
    }
    return h;
};