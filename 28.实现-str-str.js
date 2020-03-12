/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let res = -1;
    if(!needle.length) return 0
    for (let i = 0; i < haystack.length; i++) {
        let z = i
        for (let j = 0; j < needle.length; j++) {
            if(haystack[z] !== needle[j]){
                res = -1
                break
            } else {
                res = i
                z++
            }
        }
        if(res != -1){
            break
        }
    }
    return res
};


/**
 *
 *  var strStr = function(haystack, needle) {
    let res = -1;
    if(!needle.length) return 0
    for (let i = 0; i < haystack.length; i++) {
        let z = i
        for (let j = 0; j < needle.length; j++) {
            if(haystack[z] !== needle[j]){
                res = -1
                break
            } else {
                res = i
                z++
            }
        }
        if(res != -1){
            break
        }
    }
    return res
    };
 */
// @lc code=end

