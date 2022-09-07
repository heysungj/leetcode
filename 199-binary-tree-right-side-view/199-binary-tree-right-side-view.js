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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = []
    let currentLevel = []
    
    if(root) currentLevel.push(root)
    
    while( currentLevel.length !== 0){
        result.push(currentLevel[currentLevel.length-1].val)
        
        let nextLevel = []
        for(let i=0; i < currentLevel.length; i++){
            if( currentLevel[i].left ){
                nextLevel.push(currentLevel[i].left)
            }
            if( currentLevel[i].right){
                nextLevel.push(currentLevel[i].right)
            }
        }

        currentLevel = nextLevel
    }
    return result
    
};