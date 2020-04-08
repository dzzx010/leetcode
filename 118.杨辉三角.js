/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows<1) return []
    let rows = [[1]]
    generatex(numRows - 1, rows)
    return rows
};
var generatex = function(numRows, rows) {
    if(numRows === 0) return
    let row = [1]
    let index = rows.length - 1
    for (let i = 1; i < rows[index].length; i++) {
        row.push(rows[index][i-1] + rows[index][i])
    }
    row.push(1)
    rows.push(row)
    generatex(numRows-1, rows)
    return row
};
// @lc code=end

