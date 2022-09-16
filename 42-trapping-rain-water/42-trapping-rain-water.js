/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i = 0;
    let j = height.length -1;
    let larr = [];
    let result = 0;
    let rmax = 0;
    while(i < height.length){
        rmax=Math.max(rmax, height[i])
        larr.push(rmax - height[i])
        i++
    }
    rmax = 0;
    while(j >= 0){
         rmax=Math.max(rmax, height[j])
        result += Math.min(larr[j],rmax-height[j])
        j--
    }
    return result
};


/** 4) Two pointers */
// time O(n)
// space O(1)
// function trap(height) {
//   if (height == null || height.length === 0) return 0;

//   let l = 0;
//   let r = height.length - 1;

//   let lMax = 0;
//   let rMax = 0;

//   let res = 0;

//   while (l < r) {
//     lMax = Math.max(lMax, height[l]);
//     if (height[l] < lMax) {
//       res += lMax - height[l];//2 6 7 9
//     }

//     rMax = Math.max(rMax, height[r]);
//     if (height[r] < rMax) {
//       res += rMax - height[r];
//     }

//     height[l] < height[r] ? l++ : r--;
//   }

//   return res;
// }