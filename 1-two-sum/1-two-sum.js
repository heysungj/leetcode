/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map1 = new Map()
    let result = []
    for( let i = 0; i < nums.length; i++) {
        map1.set(nums[i], i)
    }
    
    for(let j = 0; j < nums.length; j++) {
        let anotherHalf = target - nums[j]
        if(map1.get(anotherHalf) && map1.get(anotherHalf) !== j){
            result.push(map1.get(anotherHalf), j)
            return result
        }
    }
    
};