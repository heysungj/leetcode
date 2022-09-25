/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     let max = nums.reduce((accumulator, value) => {
//         return accumulator + value;
//     }, 0);
    
//     let j = nums.length-1;
//     let i = 0;
//     while(i !== j){
//         if(nums[i] >= nums[j]){
//             max = Math.max(max, max - nums[j]);
//             console.log('i>=j',max)
//             j--
//         } else {
//             max = Math.max(max, max - nums[i]);
//             console.log('j>=i',max)
//             i++
//         }
//     }
    
//     return max
// };

var maxSubArray = function(nums) {
    // Initialize the max sum...
    let maxSum = nums[0];
    // Traverse all the element through the loop...
    for (let i = 1; i < nums.length; i++) {
        // nums[i] represents the largest sum of all subarrays ending with index i...
        // then its value should be the larger one between nums[i]...
        // nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
        // calculate nums[0], nums[1]…, nums[n] while comparing each one with current largest sum...
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
        // if nums[i] > maxSum then maxSum = nums[i]...
        if (nums[i] > maxSum)
            maxSum = nums[i];
    }
    return maxSum;      // return the contiguous subarray which has the largest sum...
};