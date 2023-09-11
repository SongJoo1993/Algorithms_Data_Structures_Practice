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
// Logic: Using two pointers (left,right), first get the maximum water stroage and increase left if left element is smaller than right element or decrease right value. 
// Time Complexity: O(n)

var threeSum = function(nums) {
    let result = [];
    nums.sort((a,b) => a - b);
    let target = nums.length -1;
    let l  = 0, r = target - 2;
    while(target != 0) {
        if(nums[l] + nums[r] > target) {
            r --;
        }
        else if (nums[l] + nums[r] === nums[target]) {
            let res = [nums[l], nums[r], nums[target]];
            result.push(res);
            target --, l = 0, r = target -1;
        } else {
            l ++;
        }
        
        if(l > r) {
            target --;
        }
    }
    return result;
};