/*********************************************************************** 
From LeetCode
1. Two Sum
https://leetcode.com/problems/two-sum/
Date: 2023-08-11

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Constraints:
- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists.
*/

// Attempt Number: 1
// Logic:
// 1.Iterate through the array and store each element's value as the key and index as the value to Map object
// if the object doesn't have the remainder variable (target - each index value).
// (Store element's value as the key and its index as the value in order to use has() and get() because they both check key. )
// 2.If the remainder exists in the map Object, return the array with a couple of index because it shows that the value in the iteration + remainder is target!   
// Time Complexity: O(n)

var twoSum = function(nums, target) {
    // check if the remainder exists in the map
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i];
        if(map.has(remainder)) {
            return [map.get(remainder),i];
        }
        map.set(nums[i], i);
    }
};

// Attempt Number: 2
// Logic:
// 1. Implement nested iteration to calculate the sum of current value to the rest
// 2. If the addition is equal to the value of target, return each index in an array.
// Time Complexity: O(n2)
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i ++) {
        for(let j = i + 1; j < nums.length; j ++) {
            if(nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
    return false;
};