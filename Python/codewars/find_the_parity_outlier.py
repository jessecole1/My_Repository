# You are given an array (which will have a length of at least 3, but could be very large) 
# containing integers. The array is either entirely comprised of odd integers or entirely 
# comprised of even integers except for a single integer N. Write a method that takes the 
# array as an argument and returns this "outlier" N.

def find_outlier(integers):
    odd_num = []
    even_num = []
    odd = 0
    even = 0
    for i in range(0, len(integers)):
        if integers[i] % 2 == 0:
            even_num.append(integers[i])
        else:
            odd_num.append(integers[i])
    if len(odd_num) > len(even_num):
        even = even_num[0]
        return even
    else:
        odd = odd_num[0]
        return odd




print(find_outlier([1,33,53,79,2,51,35,57]))