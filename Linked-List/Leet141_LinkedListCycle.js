/*********************************************************************** 
From LeetCode
141. Linked List Cycle
https://leetcode.com/problems/linked-list-cycle
Date: 2023-08-18

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Constraints:
-The number of the nodes in the list is in the range [0, 104].
--105 <= Node.val <= 105
-pos is -1 or a valid index in the linked-list.
*/

// Attempt Number: 1
// Logic: Using double pointers, make one ptr reach one level more than another ptr and check if they eventually meet at one point. 
// Time Complexity: O(n)

var hasCycle = function(head) {
    let double = head, single = head;
    while(double && double.next) {
        double = double.next.next;
        single = single.next;
        console.log(double, "&", single)
        if(double === single) return true
    }
    return false;
};