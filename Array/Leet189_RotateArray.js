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
// Logic: 
// Using two pointers, reverse the input array 3 times: 
// first full reverse, second first k numbers of element, third reverse the rest 
// Time Complexity: O(n)

var rotate = function(nums, k) {
    k = k % nums.length; 
    let l = 0;
    let r = nums.length - 1;
    nums = reverse(nums,l,r);
    
    l = 0
    r = k -1;
    nums = reverse(nums,l,r);
    
    l = k
    r = nums.length -1;
    nums = reverse(nums,l,r);
};

function reverse(arr, l, r) {
    while(l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}

// Attempt Number: 2
// Logic: First splice last k elements and push them to the front of the array by unshift method
// Time Complexity: O(n)
var rotate = function(nums, k) {
    k = k % nums.length;
    nums.unshift(...nums.splice(nums.length - k))  
};