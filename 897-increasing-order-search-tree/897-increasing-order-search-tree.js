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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let newTree = null;
    let tempNode=null;
   
    function inOrder(node) {
        if(!node)return;
        
       inOrder(node.left);
        
       if(!newTree){
           newTree = tempNode = node;
       }else{
//            set newNode.right equal current node
           tempNode.right = node;
//            set newNode as current node
           tempNode = node;
           tempNode.left = null;
           
       }
         inOrder(node.right)
        
    }
    
    inOrder(root)
    return newTree
};


