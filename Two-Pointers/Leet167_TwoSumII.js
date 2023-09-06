/*********************************************************************** 
From LeetCode
167. Two Sum II - Input Array Is Sorted
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
Date: 2023-09-06

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].


Constraints:
- 2 <= numbers.length <= 3 * 104
- -1000 <= numbers[i] <= 1000
- numbers is sorted in non-decreasing order.
- -1000 <= target <= 1000
- The tests are generated such that there is exactly one solution.
*/

// Attempt Number: 1
// Logic: Using two pointers, check if the sum of left and right pointer indexed element is equal to target return an array with left + 1 and right + 1
// Time Complexity: O(n)

var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        if (numbers[left] + numbers[right] > target) {
            right--;
        } else if (numbers[left] + numbers[right] < target) {
            left++;
        } else {
            break;
        }
    }
    return [left + 1, right + 1];
};