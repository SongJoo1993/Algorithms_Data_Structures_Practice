/*********************************************************************** 
From LeetCode
219. Contains Duplicate II
https://leetcode.com/problems/contains-duplicate-ii
Date: 2023-08-13

Given an integer array nums and an integer k, 
return true if there are two distinct indices i and j in the array 
such that nums[i] == nums[j] and abs(i - j) <= k.

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

Constraints:
- 1 <= nums.length <= 10^5
- -10^2 <= nums[i] <= 10^9
- 0 <= k <= 10^5
*/

// Attempt Number: 1
// Logic: 
// 1. Using Hashmap to store each element's value as the key and its index as the value.
// 2. If duplicate exists, see if the first condition is met return true, 
// otherwise replace the previous value (previous index) with the current index.
// Time Complexity: O(n)

var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if((i - map.get(nums[i])) <= k) {
            return true;
        }
        else {
            map.set(nums[i],i);
        }
    }
    return false;
};