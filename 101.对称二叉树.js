/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */

var isSymmetric = function(root) {
    if(!root) return true
    if(!root.left && !root.right) return true
    var temp = {}
    isSymmetricx(root.left, 0, temp)
    isSymmetricx(root.right, 0, temp)
    for(let key in temp){
        while(temp[key].length > 0) {
            if(temp[key].length%2 != 0) return false
            if(temp[key].pop() != temp[key].shift()){
                return false
            }
        }
    }
    return true
};
var isSymmetricx = function(root, index, temp) {
    if(!temp[index]) temp[index] = []
    if(root)
        temp[index].push(root.val)
    else {
        temp[index].push(root)
        return
    }
    ++index
    isSymmetricx(root.left, index, temp)
    isSymmetricx(root.right, index, temp)
};
// @lc code=end

