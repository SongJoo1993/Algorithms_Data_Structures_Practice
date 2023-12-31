/*********************************************************************** 
From LeetCode
21. Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists
Date: 2023-08-21

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Constraints:
- The number of nodes in both lists is in the range [0, 50].
- -100 <= Node.val <= 100
- Both list1 and list2 are sorted in non-decreasing order.
*/

// Attempt Number: 1
// Logic: Using sentinel node, check each value of l1 and l2 and assign lower value to the sentinel node.
// Time Complexity: O(n)
/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

var mergeTwoLists = function(list1, list2) {
    let frontNode = new ListNode();
    let restNodes = frontNode;
    while(list1 && list2) {
      if(list1.val > list2.val) {
        restNodes.next = list2;
        list2 = list2.next;
      }
      else {
        restNodes.next = list1;
        list1 = list1.next;
      }
      restNodes = restNodes.next;
    }
    restNodes.next = list1 || list2;
    
    return frontNode.next;
};