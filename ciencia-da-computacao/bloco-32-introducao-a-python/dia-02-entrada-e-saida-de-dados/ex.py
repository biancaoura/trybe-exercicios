import json
import csv

# 1
name = input("Give a name:")

while len(name) > 0:
    print(name)
    name = name[:-1]


# 2
def get_books(file):
    return json.load(file)


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calc_pct_by_category(book_count_by_cat, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_cat.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    with open("books.json") as file:
        books = get_books(file)

    book_count_by_cat = count_books_by_categories(books)

    book_qty = len(books)
    books_pct_rows = calc_pct_by_category(book_count_by_cat, book_qty)

    header = ["categoria", "porcentagem"]
    with open("book_report.csv", "w") as file:
        write_csv_report(file, header, books_pct_rows)
