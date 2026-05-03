# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
      
        def helper(root, total):
            if not root:
                return False
            total+= root.val
       
            
            if not root.left and not root.right: #at leaf
                return total == targetSum
            return helper(root.left, total) or helper(root.right, total)
            
            
        #helper(root, 0)
        return helper(root,0)
        