/*********************************************************************** 
From LeetCode
13. Roman to Integer
https://leetcode.com/problems/roman-to-integer
Date: 2023-07-29

Given a roman numeral, convert it to an integer.
Symbol: Value
    I : 1
    V : 5
    X : 10
    L : 50
    C : 100
    D : 500
    M : 1000

Example 1:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4

Constraints:
- 1 <= s.length <= 15
- s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
- It is guaranteed that s is a valid roman numeral in the range [1, 3999].


*/

// Attempt Number: 1
// Logic: 
// Using hash table as the reference of integer value to each Roman numeral, 
// either add the current element(elm) or (next elm - current elm).
// Time Complexity: O(n)

var romanToInt = function(s) { 
    let intVal = 0;
    let romNum = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for(let i = 0; i < s.length; i++) {
        if(romNum[s[i]] < romNum[s[i+1]]) {
            intVal += (romNum[s[i+1]] - romNum[s[i]] );
            i++
        }
        else {
            intVal += romNum[s[i]];
        }
    }
    return intVal;
};