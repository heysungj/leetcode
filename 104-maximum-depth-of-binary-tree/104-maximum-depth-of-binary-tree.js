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
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0
    if(!root) return 0
    function inOrder(root){
        if(!root)return 0;
        let left = inOrder(root.left)
        let right = inOrder(root.right)
        max = Math.max(left, right)
        return max +1
    }
    
    return inOrder(root)
    // return max+1
};