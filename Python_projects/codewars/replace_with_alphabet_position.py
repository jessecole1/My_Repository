# In this kata you are required to, given a string, replace every letter with its position in the alphabet.
# If anything in the text isn't a letter, ignore it and don't return it.

# =================
# SAVE FOR LATER
# =================

import string
def function(s):
    arr = []
    arrStr = ""

    # Going through each character of the input
    for i in range(0,len(s)):
        if s[i].isalpha() == False:
            pass
        else:
            if s[i].isupper():
                d = str(string.ascii_uppercase.index(s[i])+1)
                arr.append(d)
            if s[i].islower():
                d = str(string.ascii_lowercase.index(s[i])+1)
                arr.append(d)
            else:
                pass
            arr.append(" ")
    if arr == []:
        pass
    else:
        arr.pop(len(arr)-1)

    # Converting array to string
    for i in range(0, len(arr)):
        arrStr += arr[i]
    return arrStr

print(function("11fdsf"))
