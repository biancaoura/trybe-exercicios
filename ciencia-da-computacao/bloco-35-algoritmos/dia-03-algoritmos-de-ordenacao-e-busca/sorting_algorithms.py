# SELECTION SORT


def search(numbers, start, end):
    min_element = numbers[start]
    min_element_index = start

    for i in range(start + 1, end):  # Busca pelo menor elemento
        if numbers[i] < min_element:
            min_element = numbers[i]
            min_element_index = i

    return min_element_index  # Retorna a posição do menor elemento


def selection_sort(numbers):
    n = len(numbers)

    for index in range(n - 1):  # Início da iteração para ordenar os N-1 elementos
        min_element_index = search(numbers, index, n)
        numbers[index], numbers[min_element_index] = (
            numbers[min_element_index],
            numbers[index],
        )  # Trocando os elementos utilizando desempacotamento.

    return numbers


########################################################
# INSERTION SORT


def insertion_sort(numbers):
    n = len(numbers)  # Quantidade de elementos na lista

    for index in range(1, n):  # Começa a ordenar pelo segundo elemento
        key = numbers[index]  # Pega o segundo elemento e o define como key

        new_position = index - 1  # Toma a posição anterior para iniciar a comparação
        while (
            new_position >= 0 and numbers[new_position] > key
        ):  # Enquanto a key for menor, remaneja o elemento para frente
            numbers[new_position + 1] = numbers[new_position]  # Remaneja o elemento
            new_position = new_position - 1

        numbers[new_position + 1] = key  # Insere a key na posição correta

    return numbers


numbers = [7, 5, 9, 2, 6, 8]
print(insertion_sort(numbers))


########################################################
# BUBBLE SORT


def bubble_sort(numbers):
    n = len(numbers)  # Quantidade de elementos na lista

    for ordered_elements in range(n - 1):  # Ordena n-1 elementos
        for item in range(
            0, n - 1 - ordered_elements
        ):  # Percorrer até o elemento anterior ao ordenado
            if (
                numbers[item] > numbers[item + 1]
            ):  # se um elemento for maior, flutua ele para cima
                current_element = numbers[item]
                numbers[item] = numbers[item + 1]
                numbers[item + 1] = current_element

                # troca com desempacotamento
                # numbers[item], numbers[item + 1] = numbers[item + 1], numbers[item]
    return numbers


numbers = [7, 5, 9, 2, 6, 8]
print(bubble_sort(numbers))


########################################################
# MERGE SORT


def merge_sort(numbers, start=0, end=None):
    if end is None:
        end = len(numbers)
    if (end - start) > 1:  # se não reduzir o suficiente, continua
        mid = (start + end) // 2  # encontrando o meio
        merge_sort(numbers, start, mid)  # dividindo as listas
        merge_sort(numbers, mid, end)
        merge(numbers, start, mid, end)  # unindo as listas


# função auxiliar que realiza a mistura dos dois arrays


def merge(numbers, start, mid, end):
    left = numbers[start:mid]  # indexando a lista da esquerda
    right = numbers[mid:end]  # indexando a lista da direita

    left_index, right_index = 0, 0  # as duas listas começarão do início

    for general_index in range(
        start, end
    ):  # percorre sobre a lista inteira como se fosse uma
        if left_index >= len(
            left
        ):  # se os elementos da esquerda acabaram, preenche o restante com a lista da direita
            numbers[general_index] = right[right_index]
            right_index = right_index + 1
        elif right_index >= len(
            right
        ):  # se os elementos da direita acabaram, preenche o restante com a lista da esquerda
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        elif (
            left[left_index] < right[right_index]
        ):  # se o elemento do topo da esquerda for menor que o da direita, ele será o escolhido
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        else:
            numbers[general_index] = right[
                right_index
            ]  # caso o da direita seja menor, ele será o escolhido
            right_index = right_index + 1


numbers = [6, 5, 3, 1, 8, 7, 2, 4]
merge_sort(numbers, 0, len(numbers))
print(numbers)


########################################################
# QUICK SORT


def quick_sort(numbers, start, end):
    if start < end:
        p = partition(numbers, start, end)
        quick_sort(
            numbers, start, p - 1
        )  # Os menores em relação ao pivô ficarão à esquerda
        quick_sort(
            numbers, p + 1, end
        )  # Os maiores elementos em relação ao pivô ficarão à direita


# função auxiliar responsável pela partição do array
# escolhendo um pivô e fazendo movimentações dos sub arrays gerados


def partition(numbers, start, end):
    pivot = numbers[end]
    delimiter = start - 1

    for index in range(start, end):
        # o índice será o elemento em análise no momento, ele passará por todos os elementos
        if numbers[index] <= pivot:
            delimiter = delimiter + 1
            numbers[index], numbers[delimiter] = numbers[delimiter], numbers[index]

    numbers[delimiter + 1], numbers[end] = numbers[end], numbers[delimiter + 1]

    return delimiter + 1


numbers = [6, 5, 3, 1, 8, 7, 2, 4]
quick_sort(numbers, 0, len(numbers) - 1)
print(numbers)
