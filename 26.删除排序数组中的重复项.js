/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let remove = []
    let exists = []
    for(let i=0;i<nums.length;i++){
        if(exists[nums[i]]){
            remove.push(i)
        } else {
            exists[nums[i]] = true
        }
    }
    for (let j = remove.length-1; j >= 0; j--) {
        nums.splice(remove[j], 1);
    }
    return nums.length
};
// @lc code=end

