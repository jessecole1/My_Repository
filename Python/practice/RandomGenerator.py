import random
from random import choice, randint

def randomPasswordGenerator(num):
    stringArr = []
    range = 0
    for i in range(3):
        if num > 
    for i in range(2):
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
        
    newStringArr = []
    for i in range(len(stringArr)):
        temp = choice(stringArr)
        newStringArr.append(temp)
        stringArr.remove(temp)

    print(newStringArr)

randomPasswordGenerator(12)