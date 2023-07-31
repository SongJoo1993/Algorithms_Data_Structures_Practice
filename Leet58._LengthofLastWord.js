/*********************************************************************** 
From LeetCode
58. Length of Last Word
https://leetcode.com/problems/length-of-last-word
Date: 2023-07-31

Given a string s consisting of words and spaces, return the length of the last word in the string.

Example 1:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Constraints:
- 1 <= s.length <= 104
- s consists of only English letters and spaces ' '.
- There will be at least one word in s.


*/

// Attempt Number: 1
// Logic: Split given string into an array and add only word to a new array. Return last element's length.
// Time Complexity: O(n)

var lengthOfLastWord = function(s) {
    s = s.split(' ');
    let newArr = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] != '') {
            newArr.push(s[i])
        }
    }
    return newArr[newArr.length - 1].length;
};