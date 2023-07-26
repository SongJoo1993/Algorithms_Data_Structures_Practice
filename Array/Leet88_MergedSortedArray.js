/*********************************************************************** 
From LeetCode
88. Merge Sorted Array
https://leetcode.com/problems/merge-sorted-array
Date: 2023-07-20

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored.
nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: 
The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Constraints:
    nums1.length == m + n
    nums2.length == n
    0 <= m, n <= 200
    1 <= m + n <= 200
    -109 <= nums1[i], nums2[j] <= 109
*/

// Attempt Number: Several Attempts made to find the solution
// Logic: Comparing the last index of nums1 and nums2 and assigning a larger element of either nums1 or nums2 at the last index for combined elements.
// Time Complexity: O(m + n)

var merge = function(nums1, m, nums2, n) {
  let i = m - 1; // i is nums1's last index
  let j = n - 1; // j is nums2's last index
  let k = m + n -1; // k is total elements' last index
  
  while(i >= 0 && j >= 0) {
      if(nums1[i] >= nums2[j]) {
          nums1[k--] = nums1[i--];
      } else {
          nums1[k--] = nums2[j--]
      }
  }

  while(i >= 0) {
      nums1[k--] = nums1[i--]
  }
  while(j >= 0) {
      nums1[k--] = nums2[j--]
  }

  return;
};