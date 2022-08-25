/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    this.nums = mergeSort(nums)
}

function mergeSort(arr) {
        if(arr.length <= 1) return arr;
        let mid = Math.floor(arr.length/2);
        let left = mergeSort(arr.slice(0, mid))
        let right = mergeSort(arr.slice(mid))
        return merge(left,right)
        }
    
function merge(arr1, arr2){
        let result = []
        let j = 0
        let i = 0
//         [1,2,3,4] [3,4,5]
        while( i< arr1.length && j< arr2.length) {
            if(arr1[i] <= arr2[j]){
            result.push(arr1[i])
            i++
        } else{
            result.push(arr2[j])
            j++
        }
    }
        while(i< arr1.length) {
            result.push(arr1[i])
            i++
        }
         while(j< arr2.length) {
            result.push(arr2[j])
            j++
        }
    // console.log(result)
    return result 
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let stop = false
    if(!this.nums.length) {
        this.nums.push(val)
    }
    
    for(let i=0; i < this.nums.length && stop === false; i++) {
        if(val < this.nums[i] ){
            this.nums.splice(i,0,val)
            stop = true
        } 
        
        if(i === this.nums.length -1){
            this.nums.push(val)    
            stop = true
        } 
        
    }
    // console.log(this.nums)
    return(this.nums[this.nums.length - this.k ])
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */