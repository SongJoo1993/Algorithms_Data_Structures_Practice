/*********************************************************************** 
From LeetCode
45. Jump Game II
https://leetcode.com/problems/jump-game-ii
Date: 2023-09-01

You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

    0 <= j <= nums[i] and
    i + j < n

Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [2,3,0,1,4]
Output: 2

Constraints:
- 1 <= nums.length <= 104
- 0 <= nums[i] <= 1000
- It's guaranteed that you can reach nums[n - 1].
*/

// Attempt Number: 1
// Logic: Iterate through the array and find the farthest position and if it is greater or equal to the length return counter
// Time Complexity: O(n)

var jump = function(nums) {
  let counter = 0, max = 0;
    if(nums.length <= 1) return 0;
    for(let i = 0; i < nums.length; i++) {
        counter += 1;
        max = Math.max(nums[i]+i, max);
        if(max >= nums.length -1) {
            return counter
        }
    }
    return counter;
};

// Attempt Number: 2
// Logic: 
// Iteratively jump to the farthest reachable position from the current location while counting the jumps, 
// with the goal of minimizing the number of jumps needed to reach the end of the array
// Time Complexity: O(n)

var jump = function(nums) {
    let curr = -1, next = 0, moves = 0;
    for(let i = 0; next < nums.length - 1; i++) {
        if(i > curr) moves += 1, curr = next
        next = Math.max(next, nums[i] + i)
    }
    return moves;
};