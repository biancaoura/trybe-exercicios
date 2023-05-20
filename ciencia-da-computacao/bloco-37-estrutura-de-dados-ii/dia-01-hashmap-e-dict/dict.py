# dict comprehension
# convert 3-20 to double value
double = {i: i * 2 for i in range(3, 21)}

print(double)

# convert odd num to triple val
for key in double.keys():
    if key % 2 is not 0:
        double[key] = key * 3


print(double)
