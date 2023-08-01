/*********************************************************************** 
From LeetCode
14. Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix
Date: 2023-08-01

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Constraints:
- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lowercase English letters.
*/

// Attempt Number: 1
// Logic: Compare the first element with the rest of elements and store repetitive letter to preFix
// Time Complexity: O(n2)

var longestCommonPrefix = function(strs) {
    let preFix = "";

    if(strs.length === 1) {
        preFix = strs[0]
    }
    else {
        for(let i = 0; i < strs.length; i ++) {
            if(i != strs.length -1) {
                if(i > 0 && preFix.length === 0) {
                    return preFix;
                }
                let l = 0;
                let j = 0;
                strs[i].length >= strs[i+1].length ? l = strs[i+1].length : l = strs[i].length;
                if(preFix.length === 0) {
                    while(j < l) {
                        if(strs[i][j] === strs[i+1][j]) {
                            preFix += strs[i][j];
                            j++
                        }
                        else {
                          j = l
                        }
                    }
                }
                else {
                    let compr = "";
                    while(j < l) {
                        if(strs[i][j] === strs[i+1][j]) {
                            compr += strs[i][j];
                        }
                        j++
                    }
                    //compare both compr and preFix to find common one
                    let temp = preFix;
                    preFix = "";
                    for(let z = 0; z < Math.min(temp.length, compr.length); z++) {
                        if(temp[z] === compr[z]) {
                            preFix += temp[z];
                        }
                    }
                }
            }
        }
    }
    return preFix;
};



// Attempt Number: 2
// Logic: Set the preFix to be the first element and compare it with the rest of elements' string value
// Time Complexity: O(n2)

var longestCommonPrefix = function(strs) {
    let preFix = strs[0]
    for(let i = 1; i < strs.length; i++) {
        while(!(strs[i].indexOf(preFix) >= 0)) {
            preFix = preFix.substr(0, preFix.length - 1);
            console.log("preFix: ", preFix, i);
        }
    }
    return preFix;
};