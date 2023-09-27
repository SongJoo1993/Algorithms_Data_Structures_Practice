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
// Logic: 
// Time Complexity: O(n^2)

var searchInsert = function(nums, target) {
    if(target > nums[nums.length - 1]) {
        return nums.length;
    }
    else if(target < nums[0]) {
        return 0;
    }
    else {
        let low = 0;
        let high = nums.length - 1;
        let mid;
        if(low === high) {
            return 0;
        }

        while(low <= high) {
            mid = Math.floor((low + high)/2);
            console.log('mid:',mid)
            if(nums[mid] === target) {
                return mid;
            }
            else if(nums[mid] < target) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return mid;
    }
};