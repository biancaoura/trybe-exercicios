import pandas as pd


data = {
    "comida": ["abacate", "requeijão", "margarina", "doce de leite", "abacaxi"],
    "tipo": ["doce", "salgado", "salgado", "doce", "doce"],
}

df = pd.DataFrame(data)

# loc: busca pelo nome
comidas_doces = df.loc[df["tipo"] == "doce"]

print(comidas_doces)
# iloc: busca pelo index
print(df.iloc[2])
print(df.iloc[0:3])
