# Given an integer array nums and an integer k, return the k most frequent elements within the array.

# The test cases are generated such that the answer is always unique.

# You may return the output in any order.

class K:
    def top_k(self, nums, k):
        dict = {}
        arr = []

        for i in range(0, len(nums) + 1):
            arr.append([])

        for n in nums:
            dict[n] = 1 + dict.get(n, 0)

        for c, v in dict.items():
            arr[v].append(c)

        res = []
        for i in range(len(arr) - 1, 0, -1):
            for n in arr[i]:
                res.append(n)
                if len(res) == k:
                    return res


test = K()
print(test.top_k([7,7], 1))