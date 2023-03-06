#Write a function that accepts an array of 10 integers (between 0 and 9), 
#that returns a string of those numbers in the form of a phone number.

# =================
# DONE
# =================


def arrayList(array):
    some_list = []
    for i in range(0, len(array)):
        some_list.append(array[i])
    print(some_list)
    print(str(f'(%s%s%s) %s%s%s-%s%s%s%s' % (some_list[0],some_list[1], some_list[2], some_list[3], some_list[4], some_list[5], some_list[6], some_list[7], some_list[8], some_list[9])))

x = [8,1,8,9,3,2,8,0,6,1]
arrayList(x)
y = [8,1,8,4,8,9,1,4,0,3]
arrayList(y)