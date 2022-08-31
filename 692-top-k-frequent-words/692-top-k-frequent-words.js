/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
     const map1 = new Map();
    let result = []
    if(words.length === 1) return words
    for(let i=0;i<words.length; i++) {
        if(!map1.get(words[i])){
            map1.set(words[i], 1)
        }else{
            map1.set(words[i], map1.get(words[i])+1)
        }
    }
    // console.log(map1)
    // let sortable = []
    // map1.forEach ((value, key) => {
    //     sortable.push([key,value])
    //     }
    //  )   
    
    
        
    let temp = [...map1.keys()].sort((a,b) =>  map1.get(b) === map1.get(a) ? a.localeCompare(b) : map1.get(b) - map1.get(a))
    console.log(temp);
    return (temp.slice(0,k))
   
};
    
//     let sorted = sortable.sort((a,b) => b[1]-a[1])
//     // console.log(sorted)
//     let temp = sorted.slice(0,k)
//     for(let j=0; j<k; j++) {
//         result.push(temp[j][0])
//     }
    
//     return result
// };