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
 * @return {boolean}
 */

// use dfs inorder
// var isSymmetric = function(root) {
//     let arr = [];
    
//     function dfsInorder(node) {
//         if(node.left)dfsInorder(node.left)
//         arr.push(node.val)
//         if(node.right)dfsInorder(node.right)
//     }
    
//     dfsInorder(root);
    
//     if(arr.length % 2 === 0) return false
//     console.log(arr)
//     let mid =Math.floor(arr.length /2) ;
   
//     for(let i = 1; i <= mid; i++) {
        
//         if(arr[mid - i] !== arr[mid + i]) return false
//     }
    
//     return true
// };

var isSymmetric = function(root){
    
    function isMirror(left, right){
        if(left === null && right === null)return true
        if(left !== null && right === null)return false
        if(left === null && right !== null)return false
        
        if(left.val === right.val){
            // console.log(isMirror(left.left, right.right))
            // console.log(isMirror(left.right, right.left))
            return isMirror(left.left, right.right)&&isMirror(left.right, right.left)
        }
        
        return false
        
    }
    
    return isMirror(root.left, root.right)
}