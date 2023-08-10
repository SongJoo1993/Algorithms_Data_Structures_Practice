/*********************************************************************** 
From LeetCode
242. Valid Anagram
https://leetcode.com/problems/valid-anagram/
Date: 2023-08-10

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:
- 1 <= s.length, t.length <= 5 * 104
- s and t consist of lowercase English letters.

*/

// Attempt Number: 1
// Logic:
// 1. Uses a map to store letter of s along with its frequency
// 2. Iterate through the second string and check if each exists in the first map. If not, return false. 
// Time Complexity: O(n)

var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    if(new Set(s).size != new Set(t).size) return false;

    let m = new Map();
    for(let i = 0; i < s.length; i++) {
        m.set(s[i], (m.get(s[i]) || 0) + 1);
    }
    for (let c of t) {
        if(!m.get(c)) return false;
        m.set(c, m.get(c)-1);
    }
    
    return true;
};