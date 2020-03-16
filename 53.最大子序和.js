/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let positive = []
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > 0){
            positive.push(i)
        }
        if(max < nums[i]) {
            max = nums[i]
        }
    }
    if(positive.length > 0) {
        for (let i = 0; i < positive.length; i++) {
            let temp = nums[positive[i]]
            for (let j = positive[i] + 1; j <= positive[positive.length -1]; j++) {
                temp += nums[j]
                if(max < temp) {
                    max = temp
                }
            }
        }
    } 
    return max
};
// @lc code=end

