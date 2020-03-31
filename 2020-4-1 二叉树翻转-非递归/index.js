/**
 * 
翻转二叉树（不用递归）
输入：

     3
   /   \
  4     5
 / \   / \
7   8 9   1
输出：

     3
   /   \
  5     4
 / \   / \
9   1 8   7
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 */

/**
 * 大致思路:
 * 不能用递归,我们不能穷举起变量来缓存数据,只能通过数组来缓存不能穷举的变量
 * 1.循环变量数组,判断变量数组中是否还有元素
 * 2.有元素则取出来,交换左右子节点位置
 *    2.1 判断子节点是否为非叶子
 *    2.2 非叶子: push到变量数组中
 * 重复 1
 */
;
(() => {
  function TreeNode(val) {
    this.val = val
    this.left = this.right = null
  }
  const n8 = new TreeNode(8)
  const n7 = new TreeNode(7)
  const n9 = new TreeNode(9)
  const n1 = new TreeNode(1)
  const n4 = new TreeNode(4)
  const n5 = new TreeNode(5)
  const n3 = new TreeNode(3)
  n4.left = n7
  n4.right = n8
  n5.left = n9
  n5.right = n1
  n3.left = n4
  n3.right = n5
  console.log(n3)

  function change(root) {
    let vars = [root]
    while (vars.length) {
      const current = vars.pop()
      let left = current.left
      let right = current.right;
      [left, right] = [right, left]
      current.left = left
      current.right = right
      left.left || left.right && vars.push(left)
      right.left || right.right && vars.push(right)
    }
  }
  change(n3)
  console.log('change', n3)
})();