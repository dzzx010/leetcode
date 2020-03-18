/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length-1; i > -1; i--) {
        let n = digits[i];
        if(n+1<10){
            digits[i] = n+1
            
            break
        } else {
            digits[i] = 0
            if(i==0){
                digits.unshift(1)
            }
        }
    }
    return digits
};
// @lc code=end

