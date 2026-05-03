/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (head == null) {
            return head
        }
        let curr =  new ListNode();
        let prev = new ListNode();
        prev = null
        curr = head
        let temp = new ListNode()
         
        while (curr.next) {
             
            temp = curr.next
            
            curr.next = prev
            prev = curr
            curr = temp
            
        }
        curr.next = prev
        return curr
    }
}
