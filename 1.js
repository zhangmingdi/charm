/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

 const node = new TreeNode(1)
 node.left = new TreeNode(2)
/**
 * @param {TreeNode} root 
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let target 
    function dfs(node){
        if(!node) return false
        const leftBool = dfs(node.left) 
        const rightBool = dfs(node.right)
        if(leftBool&&rightBool){
            target = node
            return false
        }
        if(leftBool||rightBool){
            if(node.val ===p||node.val ===q) {
                target = node
                return false
            }
        }
         if(node.val ===p||node.val ===q||leftBool||rightBool) {
            return true
         }
    }
    dfs(root)
    console.log('111',target)
    
    return target
};
var lowestCommonAncestor = function(root, p, q) {
    let cur
  function travel(node) {
    if (cur) return
    if (!node) return false
    // map1.set(node, num1)
    const leftBool = travel(node.left)
    const rightBool = travel(node.right)

    if (node === p || node === q) {
      if (leftBool || rightBool) {
        cur = node
      }
      return true
    }

    if (leftBool && rightBool) {
      cur = node
    }
    return leftBool || rightBool
  }

  travel(root)

  return cur
};
const grid = [[1,4],[4,5]]
console.log('aasdas',lowestCommonAncestor(node,1,2));