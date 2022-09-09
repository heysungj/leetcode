/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let currentLevel = []
    let result = []
    if(root) currentLevel.push(root)
    while(currentLevel.length !== 0){
        let subResult = []
        for(let j=0; j<currentLevel.length; j++){
            subResult.push(currentLevel[j].val)
        }
        
        result.push(subResult)
        
        let nextLevel = []
        for(let i=0; i<currentLevel.length; i++ ){
            if(currentLevel[i].left) nextLevel.push(currentLevel[i].left)
            if(currentLevel[i].right) nextLevel.push(currentLevel[i].right)
        }
        currentLevel = nextLevel
    }
    
    for(let k=0; k<result.length; k++) {
        if(k % 2 === 1) result[k].reverse()
        // console.log(result[k])
    }
    return result
};