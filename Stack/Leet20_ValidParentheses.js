/*********************************************************************** 
From LeetCode
20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses
Date: 2023-08-17

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()[]{}"
Output: true

Constraints:
- 1 <= s.length <= 104
- s consists of parentheses only '()[]{}'.


*/

// Attempt Number: 1
// Logic: Using Stack, push string's element if it's opening or validate with a condition.
// Time Complexity: O(n)

var isValid = function(s) {
    let stack = [];
    let chars = {
        '(':')', 
        '{':'}', 
        '[':']'
    }
    for(let i = 0; i < s.length; i ++) {
        if(chars[s[i]]) {
            stack.push(s[i]);
        }
        else {
            if(stack.length == 0 || s[i] != chars[stack.pop()]) {
                return false;
            }
        }
    }
    return stack.length == 0;
};