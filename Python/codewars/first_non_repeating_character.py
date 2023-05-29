# Write a function named first_non_repeating_letter that takes a string input, 
# and returns the first character that is not repeated anywhere in the string.

#For example, if given the input 'stress', the function should return 't', 
# since the letter t only occurs once in the string, and occurs first in the string.

# As an added challenge, upper- and lowercase letters are considered the same character, 
# but the function should return the correct case for the initial letter. For example, 
# the input 'sTreSS' should return 'T'.

# =================
# SAVE FOR LATER
# =================

def first_non_repeating_letter(string):
    count = 0
    temp = string[count]
    for i in range(1, len(string)):
        if string[i] == temp:
            count += 1
    print(count)
    new = string[count]
    return new

print(first_non_repeating_letter("qwerrqw"))