/*********************************************************************** 
From LeetCode
290. Word Pattern
https://leetcode.com/problems/word-pattern
Date: 2023-08-09

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

Constraints:
- 1 <= pattern.length <= 300
- pattern contains only lower-case English letters.
- 1 <= s.length <= 3000
- s contains only lowercase English letters and spaces ' '.
- s does not contain any leading or trailing spaces.
- All the words in s are separated by a single space.
*/

// Attempt Number: 1
// Logic: 
// 1. Validat if pattern and s are comparable by checking each length and the number of unique values 
// 2. If comparable, store pattern's unique element to a key of map and s's unique element as the key's value
// 3. Return false, if key and value pair is different from the value of the element of pattern and s at the same index.   
// Time Complexity: O(n)

var wordPattern = function(pattern, s) {
    s = s.split(' ');
    if(pattern.length != s.length) return false;
    if(new Set(pattern).size != new Set(s).size) return false;
    
    const map = new Map();
    for(let i = 0; i < pattern.length; i++) {
            if(!map.has(pattern[i]))  {
                map.set(pattern[i], s[i]);
            }
            else {
                if(map.get(pattern[i]) != s[i]) {
                    return false;
                }
            }
    }
    return true;
};