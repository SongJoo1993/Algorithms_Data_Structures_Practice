/*********************************************************************** 
From LeetCode
28. Find the Index of the First Occurrence in a String
https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
Date: 2023-08-02

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Constraints:
- 1 <= haystack.length, needle.length <= 104
- haystack and needle consist of only lowercase English characters.

*/

// Attempt Number: 1
// Logic: Using built in methods, find needle's first occurence in haystack if needle exists in haystack or return -1  
// Time Complexity: O(n)

var strStr = function(haystack, needle) {
    return haystack.includes(needle) ? haystack.indexOf(needle) : -1;
};