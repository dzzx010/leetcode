/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let val = []
    let temp = head
    let pro = {}
    while(temp){
        if(val.indexOf(temp.val)>-1){
            pro.next = temp.next
        } else {
            pro = temp
            val.push(temp.val)
        }
        if(temp.next == null){
            break
        } else {
            temp = temp.next
        }
    }
    return head
};
// @lc code=end

