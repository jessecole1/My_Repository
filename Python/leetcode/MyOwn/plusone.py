class Solution: 
    def plusOne(self, digits):
        arr = []
        for i in range(0, len(digits)):
            if i == len(digits) - 1:
                x = digits[i] + 1
                if x > 9:
                    
            else:
                arr.append(digits[i])

    
s = Solution()
s.plusOne([9,9])