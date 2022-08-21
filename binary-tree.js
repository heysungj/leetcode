// 938
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// var rangeSumBST = function(root, low, high) {
//     let sum=0;
//     let data = [];
//     let queue = [];
//     queue.push(root)
//     while(queue.length){
//         root = queue.shift();
//         data.push(root.val);
//         if(root.left)queue.push(root.left)
//         if(root.right)queue.push(root.right)
//     }

//     for(let i=0; i< data.length; i++) {
//         if (data[i] >= low && data[i] <= high)sum+= data[i]
//     }
//     return sum
// };

const rangeSumBST = (root, L, R) => {
  let sum = 0;
  const traverse = (root) => {
    if (root.val >= L && root.val <= R) sum += root.val;
    if (root.left !== null) traverse(root.left);
    if (root.right !== null) traverse(root.right);
  };
  traverse(root);
  return sum;
};
