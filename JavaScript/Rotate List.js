/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    // 1. Find the length and the tail node
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // 2. Close the loop (make it circular)
    tail.next = head;

    // 3. Find the new tail: (length - (k % length) - 1) steps from the current head
    k = k % length;
    let stepsToNewTail = length - k - 1;
    let newTail = head;
    for (let i = 0; i < stepsToNewTail; i++) {
        newTail = newTail.next;
    }

    // 4. Set the new head and break the loop
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};
