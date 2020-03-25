/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    while(!nums1[nums1.length-1] && nums1.length > 0){
        nums1.pop()
    }
    // 两数组合并在nums1中
    nums1.push.apply(nums1,nums2)
    // x-y asc
    nums1.sort((x,y)=>x-y)
    while(nums1.length < m+n){
        nums1.push(0)
    }
};
// @lc code=end

