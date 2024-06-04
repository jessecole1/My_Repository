# Given a string s, return true if it is a palindrome, otherwise return false.

# A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

class Test:
    def palindrome(self, s):
        str = ""
        for c in s:
            if c.isalpha() or c.isdigit():
                str += c.lower()

        i = 0
        j = len(str) - 1
        for i in range(0, len(str)):
            if str[i] != str[j]:
                return False
            i += 1
            j -= 1
        return True
    
t = Test()
print(t.palindrome("Racecar"))