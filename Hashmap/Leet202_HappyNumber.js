/*********************************************************************** 
From LeetCode
202. Happy Number
https://leetcode.com/problems/happy-number
Date: 2023-08-12

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Constraints:
- 1 <= n <= 231 - 1
*/

// Attempt Number: 1
// Logic: Using Hashmap to store the sum of the squares of integer's each digit
// Time Complexity: O(n)

var isHappy = function(n) {
    if (n == 1) return true;
    let map = new Map();
    let sum = 0;
    while(n != 1 && !map.has(sum)) {
        map.set(sum, n);
        sum = 0;
        n.toString().split("").forEach(elm =>  sum += elm ** 2);
        n = sum;
    }
    return sum === 1;
};