class User: 
    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def greet(self):
        print(f"{self.first_name} {self.last_name} is {self.age} years old.")

class Item:
    def __init__(self, price):
        self.price = price
        self.in_stock = False
    
    def restock(self):
        self.in_stock = True

# first_user = User("Jesse", "Cole", 30)
# second_user = User("Kasey","Sanders", 30)
# second_user.greet()
# first_user.greet()
# print(first_user.age)

item_one = Item(20)
print(f"{item_one.price} {item_one.in_stock}")
item_one.restock()
print(f"{item_one.price} {item_one.in_stock}")