/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1
    let j = b.length - 1
    let carryBit = 0
    let res = ''
    while(i>-1 || j >-1){
        let t = 0
        if(i>-1 && j>-1){
            t = parseInt(a[i]) + parseInt(b[j]) + carryBit
        } else if(i>-1){
            t = parseInt(a[i]) + carryBit
        } else if(j>-1){
            t = parseInt(b[j]) + carryBit
        }
        if(t==2){
            carryBit = 1
            res = '0'+res
        } else if(t==3){
            carryBit = 1
            res = '1'+res
        } else if(t==1) {
            carryBit = 0
            res = '1'+res
        } else {
            carryBit = 0
            res = '0'+res
        }
        i--
        j--
    }
    if(carryBit == 1){
        res = '1'+res
    }
    return res
};
// @lc code=end

