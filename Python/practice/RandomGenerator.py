import random
from random import choice, randint

def randomPasswordGenerator():
    newStringArr = ""
    c = input("How long do you want the password to be?: ")
    num = int(c)
    stringLength = num
    x = input("Want to add a word? (Something not associated with you would be recommended): ")
    if x == "yes":
        y = input("Ok, what would you like to add?: ")
        newStringArr += y
        stringLength -= len(y)
    stringArr = []
    for i in range(num):
        upperCaseLetter = chr(random.randint(65,90))
        stringArr.append(upperCaseLetter)
        lowerCaseLetter = chr(random.randint(97,120))
        stringArr.append(lowerCaseLetter)
        number = chr(random.randint(48,57))
        stringArr.append(number)
        number = chr(random.randint(48,57))
        symbol = 0
        r = choice([(33,33),(35,38),(40,41),(64,64)])
        symbol += randint(*r)
        stringArr.append(chr(symbol))
    for i in range(stringLength):
        temp = choice(stringArr)
        newStringArr += temp
        stringArr.remove(temp)
        if i == len(newStringArr):
            return

    print(newStringArr)
    print(len(newStringArr))
randomPasswordGenerator()