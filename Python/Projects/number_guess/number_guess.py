import random
import math 
import time

# print("Welcome to Number Guesser!")
# time.sleep(2)
# print("You choose a lower number and higher number.")
# time.sleep(2)
# print("Then guess I'll choose a number in between, and you have to guess.")
# time.sleep(2)
# print("You have limited guesses, so think carefully!")
# time.sleep(2)
# print("Lets start by choosing your upper and lower numbers!")
# time.sleep(1)



while True:
    try:
        lower = int(input("Please enter a lower number: "))
        break
    except:
        print("Please try again.")
    
time.sleep(1)
print("Thank you.")
time.sleep(1)

while True:
    try:
        upper = int(input("Please enter your upper number: "))
        break
    except:
        print("Please try again")

time.sleep(1)
print("Thank you.")
time.sleep(1)

number = random.randint(lower, upper)
number_of_guesses = math.floor(math.log(upper - lower + 1, 2))

print("Lets begin!")
time.sleep(1)
print("You have ", number_of_guesses, " guesses.")

count = 0

while count < number_of_guesses:
    count = count + 1

    guess = None
    try:
        guess = int(input("Your guess: "))
        break
    except:
        print("Please try again")

    if guess == number:
        print("Congratulations! The number was ", number, "!")
        time.sleep(1)
        print("You win!")
        break
    
    elif guess > number:
        print("Sorry, too high.")

    elif guess < number:
        print("Sorry, too low.")

print("Sorry, you were unable to guess ", number, " correctly.")
time.sleep(1)
print("Thank you for playing.")