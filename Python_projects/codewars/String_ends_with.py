# Complete the solution so that it returns true 
# if the first argument(string) passed in ends with 
# the 2nd argument (also a string).

def strings(text, ending):
    text_arr = []
    end_arr = []
    for i in text:
        text_arr.append(i)
    for i in ending:
        end_arr.append(i)
    difference = len(text_arr) - len(end_arr)
    for i in range (0,difference):
        text_arr.pop(0)
    if(text_arr == end_arr):
        return True
    else:
        return False
    

print(strings("Good Morning" , "rning"))