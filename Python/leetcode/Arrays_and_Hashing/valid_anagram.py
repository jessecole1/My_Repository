# Given two strings s and t, return true if t is an anagram of s, and false otherwise.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

class Stack:
    def valid_anagram(self, s, t) :
        if len(s) != len(t):
            return False
        stack = []
        for i in range(0,len(t)):
            if s.__contains__(t[i]):
                continue
            else:
                return False
        return True

words = Stack()
words.valid_anagram("word", "drow")

# Notes: chekc calendar for notes of what to try next