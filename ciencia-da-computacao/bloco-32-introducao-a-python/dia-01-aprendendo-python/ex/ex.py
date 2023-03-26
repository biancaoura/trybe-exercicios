import math


def biggest(a, b):
    if a > b:
        return a
    return b


def mean(list):
    list_len = len(list)
    sum = 0

    for num in list:
        sum += num

    return sum / list_len


def print_square(n):
    for row in range(n):
        print(n * "*")


def longest_name(list):
    longest = list[0]
    for name in list:
        if len(name) > len(longest):
            longest = name
    return longest


def paint_cost(area):
    paint_price = 80
    liters = area / 3
    paint_qty = math.ceil(liters / 18)
    return paint_qty, paint_qty * paint_price
