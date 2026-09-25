import pdb
chars = {
    "a" : 3,
    "b" : 4,
    "c": 3,
    "d" : 3,
    "e" : 9,
    }

new_chars = {"c": 5, "f" : 8}
print({**chars, **new_chars})
print(chars|new_chars)

print(type("MyClass", (), {}))

for i in range(10):
    print(i, "odd" if i % 2 else "even")
    
def concatenate(first: str, second: str, *, delim: str):
    return delim.join([first, second])

print(concatenate("mike", "mclean", delim=" "))
print(concatenate(second ="mike", first = "mclean", delim=" "))


    
for x in range(10):
    print(f"10^{x} == {10**x:10d}{10**x:{x}d}")


from re import M
import sys

match sys.platform:
    case "windows":
        print("Running on Windows")
    case "darwin":
        print("Running macOS")
    case "linux":
        print("Running on Linux")
    case _:
        raise NotImplementedError(
            f"{sys.platform} not supported")
    
new_value = 101
match new_value:
    case 7:
        print(7)
    case 8:
        print(8)
    case 10:
        print(10)
    case _:
        print("number not optional")
        

for i in range(100):
    match (i % 3, i % 5):
        case (0, 0): print("FizzBuzz")
        case (0, _): print("Fizz")
        case (_, 0): print("Buzz")
        case _: print(i)
        

class Aggregator:
    all_aggregated = []
    last_aggregated = None
    def aggregate(self, value):
        self.last_aggregated = value
        self.all_aggregated.append(value)
        
a1 = Aggregator()
a2 = Aggregator()
a1.aggregate("a1-1")
a1.aggregate("a1-2")
a2.aggregate("a2-1")

print(a1.all_aggregated)
print(a2.all_aggregated)

print({**new_chars, **chars})

class RevealAccess(object):
    """A data descriptor taht sets and returns values
    normally and prints a message logging thier acess"""
    
    def __init__(self, initial=None, name="var"):
        self.val = initial
        self.name = name
        
    def __get__(self, obj, objtype):
        print("Retrieving", self.name)
        return self.val
    
    def __set__(self, obj, val):
        print("Updating", self.name)
        self.val = val
        
    def __delete__(self, obj):
        print("Deleting", self.name)
        
class MyClass(object):
    x = RevealAccess(10, 'var "X"')
    y = 5
    
class MyAccess():
    
    def __init__(self, initial=None, name="var"):
        self.value = initial
        self.name = name
        
    
    def __get__(self, obj,objtype):
        return self.value, self.name
    
    def __set__(self, obj, val):
        self.value = val
    

    
class MyOtherClass(object):
    x = MyAccess()

    
m = MyOtherClass()
m.x = 20
print(f"{m.x=}")
b = MyOtherClass()
b.x = 33
print(f"{b.x=}")
print(f"{m.x=}")


    
# m = MyClass()
# print(f"{m.x=}")
# m.x = 20
# print(f"{m.x=}")
# print(f"{m.y=}")
# del m.x
