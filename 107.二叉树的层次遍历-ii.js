/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let temp = {}
    let res = []
    let index = 0
    temp[index] = []
    if(root == null) return res
    temp[index].push(root.val)
    index++
    level(root.left, index, temp)
    level(root.right, index, temp)
    
    for(let i in temp) {
        res.unshift(temp[i])
    }
    return res
};
var level = function(root, index, temp) {
    if(root && root.val != null){
        if(!temp[index]) temp[index] = []
        temp[index].push(root.val)
    } else {
        return
    }
    
    index++
    level(root.left, index, temp)
    level(root.right, index, temp)
};
// @lc code=end

