/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function(intervals) {
//     const sortedData = intervals.sort((a, b) => a[0] - b[0])
//     // console.log(sortedData)
//     let result = [intervals[0][0], intervals[0][1]]
//     let output = []
//     for(let i = 0; i < intervals.length; i++) {
//         if(intervals[i+1] && intervals[i][1] >= intervals[i+1][0] ){
//            // result[0] = Math.min(intervals[i][0], result[0] )
//            result[1] = Math.max(intervals[i][1], intervals[i+1][1], result[1] )
           
//         } else {
//             output.push(result)
//             if(intervals[i+1]){
//                 result = [intervals[i+1][0], intervals[i+1][1]]
//             }
//         }
//     }
    
//     return output
// };

function merge(intervals) {
  // if (!intervals.length) return intervals
  intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
  var prev = intervals[0]
  var res = [prev]
  for (let curr of intervals) {
    if (prev[1] >= curr [0]) {
      prev[1] = Math.max(prev[1], curr[1])
    } else {
      res.push(curr)
      prev = curr
    }
  }
  return res
}