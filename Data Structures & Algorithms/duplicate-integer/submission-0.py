class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        myDict = {}
        for i in range(len(nums)):
            if nums[i] in myDict:
                return True
            else:
                myDict[nums[i]] = 1
        return False
        