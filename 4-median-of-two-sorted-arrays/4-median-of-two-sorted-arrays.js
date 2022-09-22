/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let result = []
    let i = 0;
    let j = 0;
    let totalLength = nums1.length + nums2.length;
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] <= nums2[j]){
            result.push(nums1[i])
            i++
        }else {
            result.push(nums2[j])
            j++
        }
    }
    
    if(i < nums1.length) {
        for( i; i< nums1.length; i++){
            result.push(nums1[i])
        }
    }
    
    if(j < nums2.length) {
        for( j; j< nums2.length; j++){
            result.push(nums2[j])
        }
    }
    // console.log(result)
    
    if(totalLength % 2 === 1) return result[Math.floor(totalLength/2)]
    if(totalLength % 2 === 0) return (result[totalLength/2-1]+result[totalLength/2])/2
    
    
};