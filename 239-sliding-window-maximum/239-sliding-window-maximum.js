/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {
//     let result = []
    
//     for(let i = 0; i<=nums.length - k; i++) { //n-k-1
//         let subArr = []
//         for(let j = i; j<i+k; j++){      //k
//             subArr.push(nums[j])
//         }
        
//         let max = Math.max(...subArr)    //k
//         result.push(max)
//     }
//     return result
// };


var maxSlidingWindow = function(nums, k) {
    const q = [];  // stores *indices*
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        while (q && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);
        // remove first element if it's outside the window
        if (q[0] === i - k) {
            q.shift();
        }
        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;    
};