/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let result =''
    let countA = 0
    let countB = 0
    let countC = 0
    while(a>0 || b>0 || c>0){
        if((a>=b && a>=c && countA <2 && a>0) ||(countB ===2 && a>0) || (countC ===2 && a>0)){
            countB = countC = 0
            result = result+'a'
            a--
            countA++
        }else if( (b>=a && b>=c && countB <2 && b>0) || (countA ===2 && b>0) || (countC ===2 && b>0)){
            countA = countC = 0
            result = result+'b'
            b--
            countB++
        }else if( (c>=a && c>=b  && countC <2 && c>0) || (countA ===2 && c>0) || (countB ===2 && c>0)){
            countB = countA = 0
            result = result+'c'
            c--
            countC++
        }else{
            break
        }
    }
    return result
};