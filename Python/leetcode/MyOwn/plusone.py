class Solution: 
    def plusOne(self, digits):
        arr = digits
        i = len(arr) - 1
        while i >= 0:
            arr[i] = arr[i] + 1
            if arr[i] > 9:
                arr[i] = 0
                if i == 0 and arr[i] == 0:
                    arr.insert(0, 1)
                    return arr
                i = i - 1
            else:
                return arr
        return arr



    
s = Solution()
print(s.plusOne([9]))