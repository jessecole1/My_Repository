# A pangram is a sentence that contains every single letter of the alphabet at least once. 
# For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
# because it uses the letters A-Z at least once (case is irrelevant).

# Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
# Ignore numbers and punctuation.

import string
def is_pangram(s):
    target_list = []
    test_list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
    for i in range(0, len(s)):
        if s[i].islower():
            target_list.append(string.ascii_lowercase.index(s[i])+1)
        if s[i].isupper():
            target_list.append(string.ascii_uppercase.index(s[i])+1)
    res = all(ele in target_list for ele in test_list)
    print(target_list)
    print(test_list)
    return res

print(is_pangram("The quick brown fox jumps over the lazy do"))