/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map1 = new Map();
    let result = []
    if(nums.length === 1) return nums
    for(let i=0;i<nums.length; i++) {
        if(!map1.get(nums[i])){
            map1.set(nums[i], 1)
        }else{
            map1.set(nums[i], map1.get(nums[i])+1)
        }
    }
    // console.log(map1)
    let sortable = []
    map1.forEach ((value, key) => {
        sortable.push([key,value])
        }
     )   
    let sorted = sortable.sort((a,b) => b[1]-a[1])
    // console.log(sorted)
    let temp = sorted.slice(0,k)
    for(let j=0; j<k; j++) {
        result.push(temp[j][0])
    }
    
    return result
};