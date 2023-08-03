/*********************************************************************** 
From LeetCode
125. Valid Palindrome
https://leetcode.com/problems/valid-palindrome
Date: 2023-08-03

A phrase is a palindrome if, 
after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Constraints:
- 1 <= s.length <= 2 * 105
- s consists only of printable ASCII characters.

*/

// Attempt Number: 1
// Logic: 
// 1. Make string all lower case and remove non-alphanumeric characters using JS methods
// 2. Compare two pointers consisting of left element and right element which are incremented and decremented in each iteration
// 3. Return false if left and right are not the same otherwise return ture after for-loop is existed.
// Time Complexity: O(n)

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    for(let left = 0 , right = s.length - 1; left < s.length; left++, right--) {
        if(left != right) {
            return false
        }
    }
    return true;
};