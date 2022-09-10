/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let moves = 0;
    nums.sort((a,b)=> a-b)
    for(let i = 0; i < nums.length-1; i++){
        let temp = nums[nums.length-1-i] - nums[0]
        moves += temp
    }
    
    return moves
};