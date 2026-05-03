class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        major = len(nums) / 2
        myDict = {}
        for i in range(len(nums)):
            if nums[i] not in myDict:
                myDict[nums[i]] = 1
            else:
                myDict[nums[i]] = myDict[nums[i]] + 1
        for x,y in myDict.items():
            if y >= major:
                return x
        
    