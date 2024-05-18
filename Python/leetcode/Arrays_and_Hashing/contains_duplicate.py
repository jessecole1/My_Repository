# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


class Test:
    def checkArray(self, nums):
        nums_dict = {}
        for i in range(0, len(nums)):
            check = nums_dict.get(nums[i])
            if check == None:
                nums_dict.update({nums[i]: 1})
            else:
                return True
        return False

t = Test()

t.checkArray([1,1,1,3,3,4,3,2,4,2])