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
var diameterOfBinaryTree = function(root) {
    let result = 0
  
  function inOrder(node){
      if(!node)return 0;
      
      let left = inOrder(node.left)
      // left++
      let right = inOrder(node.right)
      // right++
      result = Math.max(left+right, result)
      return Math.max(left, right) +1
  }
    
     // console.log('left',inOrder(root.left) )
     // console.log('right',inOrder(root.right))
    inOrder(root)
    return result
};



