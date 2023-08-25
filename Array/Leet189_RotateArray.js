/*********************************************************************** 
From LeetCode
189. Rotate Array
https://leetcode.com/problems/rotate-array
Date: 2023-08-25

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Constraints:
- 1 <= nums.length <= 105
- -231 <= nums[i] <= 231 - 1
- 0 <= k <= 105
*/

// Attempt Number: 1
// Logic: Using sentinel node, sum the value of l1 and l2 and pass overTen value to the sum of next l1 and l2 value.
// Time Complexity: O(n)


var rotate = function(nums, k) {
    let temp;
    for(let i = 0; i < nums.length; i ++) {
        temp = nums[i];
    }
};
// nums = [1,2,3,4,5,6,7], k = 3
// nums[0] -> nums[3]
// nums[1] -> nums[4]
// nums[2] -> nums[5]
// nums[3] -> nums[6]
// nums[4] -> nums[7 - length(7) = 0]
// nums[5] -> nums[8- length(7) = 1]
// nums[6] -> nums[9- length(7) = 2]