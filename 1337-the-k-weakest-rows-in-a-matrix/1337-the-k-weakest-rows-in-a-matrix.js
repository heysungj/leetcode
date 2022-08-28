/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let arr = []
    let result = []
    for( let i=0; i < mat.length; i++) {
        let index = mat[i].indexOf(0);
        if(index === -1) {
            arr.push([mat[0].length,i])
        }else {
            arr.push([index, i])
        }
        
    }
    let sorted = arr.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
    console.log(sorted)
    
    let temp = sorted.slice(0,k);
    for(let j=0; j<temp.length; j++){
        result.push(temp[j][1])
    }
    return result
};