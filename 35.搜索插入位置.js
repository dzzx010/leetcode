/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = nums.indexOf(target)
    if(index == -1){
        index = nums.length
        for(let i = nums.length -1; i >= 0 ; i--){
            if(target >= nums[i]) {
                break
            } else {
                index--
            }
        }
    }
    return index
};
// @lc code=end

