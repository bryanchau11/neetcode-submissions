class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        res = 0
        myMax = 0
        for i in range(len(nums)):
            if nums[i] == 1:
                res+=1
            else:
                myMax = max(myMax, res)
                res = 0
            
        return max(res, myMax)