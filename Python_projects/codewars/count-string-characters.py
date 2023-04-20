# The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

def count(string):
    r = {}
    for c in string:
        if c in r:
            r[c] += 1
        else:
            r[c] = 1
    return r

print(count("hello"))


# did not get this one



# Python3 Program to check whether a
# given key already exists in a dictionary.
 
# def checkKey(dic, key):
#     if key in dic.keys():
#         print("Present, ", end =" ")
#         print("value =", dic[key])
#     else:
#         print("Not present")
         
# # Driver Code
# dic = {'a': 100, 'b':200, 'c':300}
# key = 'b'
# checkKey(dic, key)
 
# key = 'w'
# checkKey(dic, key)









# dict = {'key1': 'geeks', 'key2': 'fill_me'}
# print("Current Dict is:", dict)
 
# # using the subscript notation
# # Dictionary_Name[New_Key_Name] = New_Key_Value
# dict['key2'] = 'for'
# dict['key3'] = 'geeks'
# dict['testttttttt'] = 'testingthis'
# print("Updated Dict is:", dict)

# for i in dict.keys():
#     print(i)