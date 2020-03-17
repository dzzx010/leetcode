/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let x = s.split(" ")
    let i = x.length -1
    let e = x[i]
    while(!e){
        if(i>0){
            i--
            e = x[i]
        } else {
            break
        }
    }
    return e.length
};
// @lc code=end

