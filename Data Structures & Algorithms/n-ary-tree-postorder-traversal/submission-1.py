"""
# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children
"""

class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        if not root:
            return []
        res = []
        def helper(root):

            if root.children:
                for child in root.children:
                    helper(child)
            res.append(root.val)
        helper(root)
        return res
        