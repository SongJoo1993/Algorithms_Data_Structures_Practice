/*********************************************************************** 
From LeetCode
74. Search a 2D Matrix
https://leetcode.com/problems/search-a-2d-matrix/
Date: 2023-10-16

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
// Logic: Performs a binary search within the matrix to determine whether the target value is present, utilizing a separate binarySearch function for searching within rows of the matrix.
// Time Complexity: 

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const inner = matrix[0].length, outer = matrix.length;
    if (target < matrix[0][0] || target > matrix[outer-1][inner-1]) return false;

    let low = 0,high = matrix.length-1;
    let mid;

    while (low <= high) {
        mid = Math.floor((low+high)/2)

        if (target <= matrix[mid][inner-1] && target >= matrix[mid][0]) break;
        if (target < matrix[mid][0]) high = mid - 1;
        else if (target > matrix[mid][inner-1]) low = mid + 1;
    }

    return binarySearch(target,matrix[mid])
};

function binarySearch(target,nums) {
    let low = 0,high = nums.length-1;

    while (low <= high) {
        let mid = Math.floor((low+high)/2);
        if(target == nums[mid]) return true;

        if(target < nums[mid]) high = mid - 1;
        else low = mid + 1;
    }

    return false
}