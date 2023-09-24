/*********************************************************************** 
From LeetCode
15. 3Sum
https://leetcode.com/problems/3sum/
Date: 2023-09-11

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Constraints:
- 3 <= nums.length <= 3000
- -105 <= nums[i] <= 105

*/

// Attempt Number: 1
// Logic: With current elemnt, using a right and a pointer to find the to find the sum of each element is 0 and make them an array and push it to the res variable.
// Time Complexity: O(n^2)

var threeSum = function(array) {
    array.sort((a,b) => a - b);
    const res = [];
    for(let i=0; i < array.length - 2; i++) {
    // making sure our solution set does not contain duplicate res
    if(array[i] != array[i-1]) { 
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            const currentSum = array[i] + array[left] + array[right];
            if (currentSum === 0) {
                res.push([array[i], array[left], array[right]]);
                while(array[left] == array[left + 1]) left ++
                while(array[right] == array[right - 1]) right -- // making sure our solution set does not contain duplicate res
                left ++;
                right --;
            } else if(currentSum < 0) {
                left ++
            } else if(currentSum > 0) {
                right --
            }
        }
    }}
    return res
};