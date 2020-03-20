/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let y = 0
    while(true){
        let z = y + 1
        if(z*z>x){
            break
        }
        y++
    }
    return y
};
// @lc code=end

