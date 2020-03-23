/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var temp = {}
temp[1] = 1
temp[2] = 2
var climbStairs = function(n) {
    
    if(temp[n]) return temp[n]
    temp[n-1] = climbStairs(n-1)
    temp[n-2] = climbStairs(n-2)
    return temp[n-1] + temp[n-2]
};

// @lc code=end

