# Count the number of Duplicates

# Write a function that will return the count of 
# distinct case-insensitive alphabetic characters and 
# numeric digits that occur more than once in the input string. 
# The input string can be assumed to contain only alphabets 
# (both uppercase and lowercase) and numeric digits.

# =================
# SAVE FOR LATER
# =================

def function(s):
    temp = []
    counter = 0
    for i in range(0,len(s)):
        temp = s[i]
        for j in range(0,len(s)):
            if s[j] == s[i]:
                break
            if s[j] == temp:
                counter += 1
    return counter

print(function("aqwaeratya"))

