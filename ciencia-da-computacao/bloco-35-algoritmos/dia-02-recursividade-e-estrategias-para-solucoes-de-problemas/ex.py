def interactive_count_pairs(n: int) -> int:
    pairs = 0
    for num in range(n + 1):
        if num % 2 == 0 and num != 0:
            pairs += 1
    return pairs


def recursive_count_pairs(n: int) -> int:
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + recursive_count_pairs(n - 1)
    else:
        return recursive_count_pairs(n - 1)


print(interactive_count_pairs(15))
print(recursive_count_pairs(15))


def recursive_find_max_int(list: list[int], size: int) -> int:
    if size == 1:
        return list[0]
    else:
        max_int = recursive_find_max_int(list, size - 1)
        if max_int > list[size - 1]:
            return max_int
        else:
            return list[size - 1]


def max_int(list: list[int]) -> int:
    size = len(list)
    return recursive_find_max_int(list, size)


print(max_int([1, 21, 300, 4, 57]))


def recursive_gcd(a, b):
    if b == 0:
        return a
    return recursive_gcd(b, a % b)


print(recursive_gcd(90, 75))
