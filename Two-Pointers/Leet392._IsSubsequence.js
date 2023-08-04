/*********************************************************************** 
From LeetCode
392. Is Subsequence
https://leetcode.com/problems/is-subsequence
Date: 2023-08-04

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Constraints:
- 0 <= s.length <= 100
- 0 <= t.length <= 104
- s and t consist only of lowercase English letters.


*/

// Attempt Number: 1
// Logic: 
// 1. Using two pointers, increment the pointer of string 's' and 't' if each letter in 's' exists in string 't'.
// 2. If not, move to next letter of 't' by incrementing only the pointer of 't'.
// 3. Reutnr true if the pointer of string 's' is equal to its length and false if it's not. 
// Time Complexity: O(n)

var isSubsequence = function(s, t) {
    let sPtr = 0, tPtr = 0;
    while(tPtr < t.length) {
        if(s[sPtr] == t[tPtr]) {
            sPtr++;
            tPtr++;
        }else {
            tPtr++;
        }
    }
    return sPtr == s.length;
};