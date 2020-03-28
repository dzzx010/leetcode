/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let index = 0
    if(root) {
        ++index
        let x = maxDepthx(root.left, index)
        let y = maxDepthx(root.right, index)
        x = index > x ? index: x
        index = x>y ? x:y
    }
    return index
};

var maxDepthx = function(root, i) {
    if(root) {
        ++i
        let x = maxDepthx(root.left, i)
        let y = maxDepthx(root.right, i)
        i = x>y ? x:y
    }
    return i
};

// @lc code=end

