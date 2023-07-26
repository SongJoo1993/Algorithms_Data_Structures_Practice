/*********************************************************************** 
From LeetCode
27. Remove Element
https://leetcode.com/problems/remove-element/
Date: 2023-07-22

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The order of the elements may be changed. 
Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, 
you need to do the following things:

- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.

Example 1:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: 
Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:
    0 <= nums.length <= 100
    0 <= nums[i] <= 50
    0 <= val <= 100
*/

// Attempt Number: 1
// Logic: 
// Counting up k and mark element not equal to "val" as false in the first for loop and swap 
// Swapping elemented makred false with non-marked element in the second for loop
// Time Complexity: O(n) + O(n) = O(n)

var removeElement = function(nums, val) {
    //1st loop time complexity: O(n)
    let k = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums[i] = false;
        }
        else {
            k++;
        }
    }
    //2nd loop time complexity: O(n)
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === false && i < k) {
            let s;
            let j = i + 1;
            while(nums[j] === false) {
                j += 1;
            }
            s = nums[i];
            nums[i] = nums[j];
            nums[j] = false;
        }
    }
    
    return k;
};

// Attempt Number: 2
// Logic: Using two-pointer apporach with "k" and "i" where "k" moves in the same direction as "i"
// Time Complexity: O(n)
var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};