/*********************************************************************** 
From LeetCode
74. Search a 2D Matrix
https://leetcode.com/problems/search-a-2d-matrix/
Date: 2023-10-05

You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Constraints:
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 100
- -104 <= matrix[i][j], target <= 104

*/

// Attempt Number: 1
// Logic: 
// Time Complexity: 

var searchMatrix = function(matrix, target) {
    let len = matrix.length, len2 = matrix[0].length, i = 0;
    while(i < len) {
        if(matrix[i][0] <= target && target <= matrix[i][len2-1]){
            console.log("first is", matrix[i][0],"last is", matrix[i][len2-1])
            return searchInsert(matrix[i],target);
        }
        i++;
    }
    return false;
};


var searchInsert = function(nums, target) {
    let low = 0, high = nums.length - 1;
    if(low === high) {
        return nums[low] === nums[high];
    }
    while(low < high) { 
        let mid = Math.ceil((high-low)/2); 
        if(target === nums[mid]) {
            return true
        }
        else if (target > nums[mid]) {
            low = mid + 1;
        } 
        else {
            high = mid -1;
        }
    }
    return false;
};