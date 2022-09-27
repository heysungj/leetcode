/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let lIdx = 0;
    let rIdx = 0;
    // let l , r;
    
    for(let i = 0; i < s.length; i++) {
        for(let j = i; j <= i+1; j++) {
            for(let l = i, r = j; s[l] && s[l] === s[r]; l--, r++){
                [lIdx, rIdx] = rIdx - lIdx > r - l? [lIdx, rIdx] : [l, r];
            }
        }
    }
    
    return s.substring(lIdx, rIdx+1)
    };

