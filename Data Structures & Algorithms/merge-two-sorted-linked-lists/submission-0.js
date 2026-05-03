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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 == null) {
            return list2;
        }
        if (list2 == null) {
            return list1;
        }
        let dummy = new ListNode();
        dummy.next = null
        let test = new ListNode();
        test = dummy;
        while (list1 && list2) {
            if (list1.val < list2.val) {
                dummy.next = list1;
                list1 = list1.next
            } else {
                dummy.next = list2;
                list2 = list2.next;
            }
            dummy = dummy.next
        }
        if (list1 != null) {
            dummy.next = list1
        }
        if (list2 != null) {
            dummy.next = list2
        }
        return test.next
    }
}
