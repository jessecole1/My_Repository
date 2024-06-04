# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

class TwoSum:
    def two_sum(self, nums, t):
        for i in range(0, len(nums)-1): 
            for j in range (1, len(nums)):
                if nums[i] + nums[j] == t and i != j:
                    solution = []
                    solution.append(i)
                    solution.append(j)
                    return solution


two = TwoSum()
print(two.two_sum([3,3],6))