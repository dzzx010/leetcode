/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let one = []
    let two = []
    rowIndex++
    while(rowIndex>0) {
        two = []
        for (let i = 0; i < one.length + 1; i++) {
            if(i==0) 
                two.push(1)
            else if(i==one.length) {
                two.push(1)
            } else {
                two.push(one[i-1]+one[i])
            }
        }
        one = two
        rowIndex--
    }
    return two
};
// @lc code=end

