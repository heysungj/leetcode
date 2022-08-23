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

// compare from bottom need to use InOrder
// var isValidBST = function(root) {
//     if(!root) return true
    
//     if(root.left && root.left.val > root.val){
//         return false;
//     } 
//     if(root.right && root.right.val < root.val){
//         return false;
//     }
    
//     if(root.left) isValidBST(root.left);
//     if(root.right)isValidBST(root.right);
// };

// var isValidBST = function(root) {
//   let prevVal = null;

//   const inorderTraverse = (node) => {
//     if (!node)
//       return true;

//     if (!inorderTraverse(node.left))
//       return false;

//     if (prevVal !== null && node.val <= prevVal)
//       return false;

//     prevVal = node.val;

//     return inorderTraverse(node.right);
//   }

//   return inorderTraverse(root);
// };



var isValidBST = function(root, min=null, max=null) {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};