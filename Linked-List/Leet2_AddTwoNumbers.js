/*********************************************************************** 
From LeetCode
2. Add Two Numbers
https://leetcode.com/problems/add-two-numbers
Date: 2023-08-23

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Constraints:
- The number of nodes in each linked list is in the range [1, 100].
- 0 <= Node.val <= 9
- It is guaranteed that the list represents a number that does not have leading zeros.

*/

// Attempt Number: 1
// Logic: Using sentinel node, sum the value of l1 and l2 and pass overTen value to the sum of next l1 and l2 value.
// Time Complexity: O(n)
/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

var addTwoNumbers = function(l1, l2) {
    let sum = 0, overTen = undefined;
    let head = new ListNode(0);
    let start = head;

    while(l1 || l2 ||overTen) {
        if(!overTen) {
            sum = 0
        }
        else {
            sum = overTen;
        }
        
        if(l1) {
            sum+=l1.val
            l1 = l1.next;
        }
        if(l2) {
            sum+=l2.val
            l2 = l2.next;
        }
        
        if(sum > 9) {
            overTen = Math.floor((sum)/10);
            sum= sum % 10;
        }
        else {
            overTen = undefined;
        }
        head.next = new ListNode(sum);
        head = head.next;
    }
    return start.next;
};