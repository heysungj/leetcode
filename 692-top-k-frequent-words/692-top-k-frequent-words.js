/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
     const map1 = new Map();
    // words.sort()
    if(words.length === 1) return words
    for(let i=0;i<words.length; i++) {
        if(!map1.get(words[i])){
            map1.set(words[i], 1)
        }else{
            map1.set(words[i], map1.get(words[i])+1)
        }
    }
        // map1.get(b) === map1.get(a) ? a.localeCompare(b) :
    let temp = [...map1.keys()].sort((a,b) =>map1.get(b) === map1.get(a) ? a.localeCompare(b) :  map1.get(b) - map1.get(a))
    return (temp.slice(0,k))
   
};

 
// var topKFrequent = function(words, k) {
//     let map = new Map();
//     let rslt = [];
//     // Sort word array - much easier than trying to sort a filled map. Since this is sorted alphanumerically (and JS maps function like queues)
//     //  we always guarantee that the pulled key array list is sorted correctly 
//    words.sort();
// //    Set the map, sort by value, print to console
//    for (let l = 0; l < words.length; l++){
//        map.set(words[l], map.get(words[l]) + 1 || 1);
//    }
//  const sortedMap = new Map([...map.entries()].sort((a,b) => b[1] - a[1]));
//  const keys = Array.from(sortedMap.keys());
//  for (let m = 0; m < k; m++){
//     rslt.push(keys[m]);
//  }
//  return rslt;
// };