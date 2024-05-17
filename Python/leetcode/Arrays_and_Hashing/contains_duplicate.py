# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


class Test:
    def checkArray(self, nums):
        nums_dict = {}
        for x in range(0, len(nums)):
            check = nums_dict.get(x)
            print("getting x: ")
            print(nums_dict.get(nums[x]))
            if check:
                print("returning false")
                return False
            else:
                nums_dict[nums[x]] = x
        print(nums_dict)

t = Test()

t.checkArray([10,9,10,8,7,6])