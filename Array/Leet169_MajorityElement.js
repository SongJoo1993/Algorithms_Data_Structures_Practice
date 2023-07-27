/*********************************************************************** 
From LeetCode
169. Majority Element
https://leetcode.com/problems/majority-element/
Date: 2023-07-27

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
- n == nums.length
- 1 <= n <= 5 * 104
- -109 <= nums[i] <= 109
*/

// Attempt Number: 1
// Logic: Using object to find the element that appears more than ⌊n / 2⌋ times.
// Time Complexity: O(n)

var majorityElement = function(nums) {
    let counter = {};
    for(let i = 0; i < nums.length; i++) {
        counter[nums[i]] ? counter[nums[i]]++ : counter[nums[i]] = 1;
        //
        if(counter[nums[i]] > (nums.length/2)) {
            return nums[i];
        }
    }
};