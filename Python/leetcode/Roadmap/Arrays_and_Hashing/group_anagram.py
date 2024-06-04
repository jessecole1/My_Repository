# Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

# An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

from collections import defaultdict

class Group_Anagram:
    def group_anagram(self, strs):

        # defaultdict gives a key even in there is no value 
        res = defaultdict(list)

        # looping through each string in the given array 
        for s in strs:

            # creating an array of 26 characters 
            count = [0] * 26

            for c in s:
                # this line finds where to place the one in the count array, and puts a 1
                count[ord(c) - ord("a")] += 1

            # if the defaultdict doesnt have the array (or the string), itll create a new key. 
            # adds the string to the matching key in the defaultdict
            res[tuple(count)].append(s)
        print(res.values())
        return res

test = Group_Anagram()

x = ["act","pots","tops","cat","stop","hat"]
print(test.group_anagram(x))