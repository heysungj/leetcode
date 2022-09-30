/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let minSoFar = Math.pow(10, 4)
    
    for ( let i = 0; i < prices.length; i++){
//         find current minimum
        if(prices[i] < minSoFar){
            minSoFar = prices[i]
         } else {
             max = Math.max(max, prices[i] - minSoFar)
         }
    }
    
    return max;
};