# Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

def pig_it(text):
    temp = []
    for i in text:
        temp.append(i)
    for i in temp:
        

print(pig_it('hello my name is jesse'))