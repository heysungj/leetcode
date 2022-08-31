/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let outPut=[]
    let tempResult = []
    let distance;
    for(let i=0; i<points.length; i++) {
        distance = Math.pow(points[i][0], 2) + Math.pow(points[i][1],2)
        tempResult.push([distance, points[i]])
    }
    
    tempResult.sort((a,b)=> a[0]-b[0] )
 
    let temp = tempResult.slice(0,k)
    for(let j=0; j<k; j++) {
        outPut.push(tempResult[j][1])
    }
    
    return outPut
};