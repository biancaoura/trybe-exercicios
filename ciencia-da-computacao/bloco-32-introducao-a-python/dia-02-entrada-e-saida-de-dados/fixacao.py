# 1
name = input("Type your name:")
for letter in name:
    print(letter)

# 2
numbers = input("Digite números para somar:")

numArr = numbers.split(" ")

sum = 0

for num in numArr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} é um valor inválido")
    else:
        sum += int(num)

print(f"A soma dos valores é: {sum}")

# 3
failedStudents = []
with open("students.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line.split(" ")
        if int(student_grade[1]) < 6:
            failedStudents.append(student_grade[0] + "\n")


with open(
    "failedStudents.txt",
    mode="w",
) as failedStudentsFile:
    print(failedStudents)
    failedStudentsFile.writelines(failedStudents)
