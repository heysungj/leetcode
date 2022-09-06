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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
  const findPath = (root, target, path) => {
    if (!root)
      return '';
    else if (root.val === target)
      return path;
    else
      return findPath(root.left, target, path + 'L') + findPath(root.right, target, path + 'R');
  }
  
  let sPath = findPath(root, startValue, '');
  let tPath = findPath(root, destValue, '');
  
  let i = 0;
  const max_i = Math.min(sPath.length, tPath.length);// min possible common path
  
  while (i < max_i && sPath[i] === tPath[i]) i++; //if at the same side
  
  let result = '';
  

  for (let j = i; j < sPath.length; j++) {
    result += 'U';
  }
  
  return result + tPath.substring(i);
};