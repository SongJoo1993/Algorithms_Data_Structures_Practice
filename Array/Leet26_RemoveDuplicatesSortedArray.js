/*********************************************************************** 
From LeetCode
26. Remove Duplicates from Sorted Array
https://leetcode.com/problems/remove-element/
Date: 2023-07-26

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. 
Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
- Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
- Return k.

Example 1:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:
- 1 <= nums.length <= 3 * 104
- -100 <= nums[i] <= 100
- nums is sorted in non-decreasing order.
*/


// Attempt Number: 1
// Logic: Using two-pointers apporach with "k" where k represents
// Time Complexity: O(n)

var removeDuplicates = function(nums) {
    let k = 1;
    let i = 0;
    while(i < nums.length) { 
        if(nums[i] === nums[i + 1]) {
            i++;
        }
        else if(i === (nums.length -1)) {
            i++;
        }
        else {
            nums[k] = nums[i + 1];
            i++;
            k++;
        }
    }
    return k;
};

// Attempt Number: 2
// Logic: 
// 1. Initialize two pointers from the start, next to each other
// 2. Loop while second pointer doesn't reach the end
// 3. If two numbers equal keep moving forward the second pointer
// 4. Once encountering non equal value, move the main pointer forward and update its value with the value of the second pointer, keep moving second pointer forward
// 5. return the length of where the first pointer stopped 
// Time Complexity: O(n)
const removeDuplicates = nums => {
    let left = 0; // first pointer 
    let right = left + 1; // second pointer
    
    while(right < nums.length){
        if(nums[left] !== nums[right]) {
            left++;
            nums[left] = nums[right] ;
        }
        right++;
    }
    return left+1;
};