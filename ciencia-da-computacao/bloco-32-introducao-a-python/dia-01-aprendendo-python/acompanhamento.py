# list

trybe_course = ["Introdução", "Front-end", "Back-end"]

trybe_course.append("Ciência da Computação")
trybe_course[0] = "Fundamentos"

# set

permissions = {"member", "group"}

permissions.add("root")
permissions.union({"user"})
permissions.intersection({"user", "member"})
permissions.difference({"user"})

var = set()
var.add("John")

frozen = frozenset(["member", "group"])

frozen.union({"user"})
frozen.intersection({"user", "member"})
frozen.difference({"user"})

# dict

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info["recorrente"] = "Sim"
del info["origem"]

# while - fatorial

number = 10
counter = 1
result = 1

while counter <= number:
    result *= counter
    counter += 1
print(result)

# while - list comprehension

ratings = [6, 8, 5, 9, 10]

new_ratings = [rating * 10 for rating in ratings]
print(new_ratings)

# for

for rating in ratings:
    if rating % 3 == 0:
        print(f"{rating} é múltiplo de 3")
