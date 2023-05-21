import pandas as pd

# DataFrame
dishes = {
    "nome": ["Maria", "João", "Fernanda", "Túlio"],
    "prato": ["Feijoada", "Vatapá", "Lasanha", "Tapioca"],
    "sobremesa": ["Brigadeiro", "Quindim", "Pudim", "Bolo"],
}


df = pd.DataFrame(dishes)

print(
    f"""dishes DataFrame:
{df}

"""
)
print(
    f"""desserts Series in DF:
{df["sobremesa"]}

"""
)


# Series


# Series a partir de array: index é 0 até n-1
knights = ["Ikki", "Hyoga", "Seyia", "Shiryu", "Shun"]

series = pd.Series(knights)
print(
    f"""Series from array:
{series}

"""
)

# Series a partir de dict: key é o index
sailors = {
    "Moon": "Usagi",
    "Mercury": "Ami",
    "Mars": "Rei",
    "Jupter": "Makoto",
    "Venus": "Minako",
}

series2 = pd.Series(sailors)
print(
    f"""Series from dict:
{series2}"""
)
