/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
// const distanceK = (root, target, k) => {
// 	const parent = new Map(); // children: parent
	
// 	// map children to parent
// 	// this is so we can traverse "up" from our given target node
// 	const traverse = root => {
// 		if (!root) return;

// 		if (root.left) {
// 			parent.set(root.left, root);
// 			traverse(root.left);
// 		}

// 		if (root.right) {
// 			parent.set(root.right, root);
// 			traverse(root.right);
// 		}
// 	};

// 	const output = [];
// 	const visited = new Set();
// 	const findNodes = (root, distance) => {
// 		if (!root) return;
// 		if (visited.has(root)) return;
// 		if (distance === k) output.push(root.val); // k-distance node found

// 		visited.add(root); // mark visited
		
// 		// traverse left/right and "up" parent
// 		findNodes(root.left, distance + 1); // left
// 		findNodes(root.right, distance + 1); // right
// 		findNodes(parent.get(root), distance + 1); // parent
// 	};

// 	traverse(root);
// 	findNodes(target, 0);
// 	return output;
// };

const distanceK = (root, target, k) => {

    const traverse = root => {

        // No root? Stop recursion
        if(!root)return

        // What we do if we found the target
        if(root.val === target.val){
            return [root]
        }

        // Recusive part - Explore left and right.
        let left = traverse(root.left)
        // If left returned something (meaning target was found), add this step's node to that target
        if(left){
            left.push(root)
            return left
        }

        let right = traverse(root.right)
        if(right){
            right.push(root)
            return right
        }
        return false
    };

    const distFromTarget = (node, dist) => {
        if(!node) return
        if(node.seen) return

        if(dist === k){
            output.push(node.val)
            // Return because anything farther down will have a distance greater than k
            return
        }

        distFromTarget(node.left, dist + 1)
        distFromTarget(node.right, dist + 1)
    }

    const parentList = traverse(root); // List of parent nodes originating at the target
    let output = []

    i = 0
    while (i < parentList.length && i <= k){
        distFromTarget(parentList[i], i)
        parentList[i].seen = true
        i++
    }

    return output
};
