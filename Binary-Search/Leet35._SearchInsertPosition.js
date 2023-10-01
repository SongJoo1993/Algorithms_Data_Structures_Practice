/*********************************************************************** 
From LeetCode
35. Search Insert Position
https://leetcode.com/problems/search-insert-position/
Date: 2023-09-27

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Constraints:
- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums contains distinct values sorted in ascending order.
- -104 <= target <= 104
*/

// Attempt Number: 1
// Logic: Using binary search alg and two pointers (low and high), return the index of target.
// Time Complexity: O(log n)

var searchInsert = function(nums, target) {
    let low = 0, high = nums.length; 
    while(low < high) { 
        let mid = low + Math.floor((high-low)/2); 
        if (target > nums[mid]) {
            low = mid + 1 
        } else {
            high = mid 
        }
    }
    return low;
};