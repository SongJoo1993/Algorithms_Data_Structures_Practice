/*********************************************************************** 
From LeetCode
205. Isomorphic Strings
https://leetcode.com/problems/isomorphic-strings
Date: 2023-08-06

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true

Constraints:
- 1 <= s.length <= 5 * 104
- t.length == s.length
- s and t consist of any valid ascii character.
*/

// Attempt Number: 1
// Logic:
// 1. Uses a map to store character mappings from s to t, iterating through each character in s.
// 2. If a mapping conflict is found or the number of distinct characters in t doesn't match the map's size, it returns false or true.
// Time Complexity: O(n)

function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const charMap = new Map();
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        if (!charMap.has(charS)) {
            charMap.set(charS, charT);
        } else {
            if (charMap.get(charS) !== charT) {
                return false;
            }
        }
    }
    return new Set([...charMap.values()]).size === charMap.size;
};