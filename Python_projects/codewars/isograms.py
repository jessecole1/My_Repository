# An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
# Implement a function that determines whether a string that contains only letters is an isogram. 
# Assume the empty string is an isogram. Ignore letter case.

def is_isogram(string):
    for i in range(0, len(string)):
        temp_char = string[i].lower()
        temp_numb = i
        for j in range(0,len(string)):
            temp_char_two = string[j].lower()
            if j == i:
                pass
            else:
                if temp_char_two == temp_char:
                    return False
    return True






print(is_isogram("kcc"))