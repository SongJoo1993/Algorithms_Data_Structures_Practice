/*********************************************************************** 
From LeetCode
383. Ransom Note
https://leetcode.com/problems/ransom-note
Date: 2023-08-05

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
- 1 <= ransomNote.length, magazine.length <= 105
- ransomNote and magazine consist of lowercase English letters.
*/

// Attempt Number: 1
// Logic: 
// 1. Create a Map object and make each letter as a key and # of letters in the string as a value.
// 2. Iterate through ransomNote and if ransomNote's element doesn't exist in the Map object return false or decrement corresponding key's value.
// Time Complexity: O(n)

var canConstruct = function(ransomNote, magazine) {
    let s = new Map();
    for(let i = 0; i < magazine.length; i++) {
        s.set(magazine[i], (s.get(magazine[i]) || 0) + 1)
    }
    for(let j = 0; j < ransomNote.length; j++) {
        if(s.get(ransomNote[j]) > 0) {
            s.set(ransomNote[j], s.get(ransomNote[j]) - 1);
        }
        else {
            return false;
        }
    }
    return true;
};