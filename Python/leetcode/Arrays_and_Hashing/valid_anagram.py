# Given two strings s and t, return true if t is an anagram of s, and false otherwise.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

class Stack:
    def valid_anagram(self, s, t) :
        if len(s) != len(t):
            return False
        dict = {}
        for i in range(0,len(s)):
            if dict.get(s[i]) != None:
                dict.update({s[i]: dict.get(s[i]) + 1 })
            elif dict.get(s[i]) == None:
                dict.update({s[i]:1})
        for i in t:
            if dict.get(i) != None:
                dict.update({i: dict.get(i) - 1})
            elif dict.get(i) == None:
                dict.update({i:1})
        for i in dict.values():
            if i != 0:
                return False
        return True

words = Stack()
print(words.valid_anagram("wordd", "dword"))

# Notes: chekc calendar for notes of what to try next