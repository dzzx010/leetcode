/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let s = '1'
    let x
    let y = 0
    n--
    while(n){
        let ss = s.split('')
        s = ''
        for(let i = 0 ; i < ss.length; i++){
            if(x){
                if(x==ss[i]){
                    y++
                } else {
                    s += y + '' + x
                    x = ss[i]
                    y = 1
                }
            } else {
                x = ss[i]
                y++
            }
        }
        s += y + '' + x
        x = ''
        y = 0
        n--
    }
    return s

};
// @lc code=end

