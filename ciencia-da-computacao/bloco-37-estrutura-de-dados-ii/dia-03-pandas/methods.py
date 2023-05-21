import pandas as pd


preco_eletrodomesticos = pd.DataFrame(
    {
        "eletrodomesticos": [
            "geladeira",
            "fogao",
            "liquidificador",
            "airfryer",
            "batedeira",
            "playstation5",
        ],
        "preco": [3000, 1200, 200, 400, 150, 4500],
    }
)

print(f"shape = {preco_eletrodomesticos.shape}")
# num de linhas e col do df
# shape = (6, 2)

print(f"columns = {preco_eletrodomesticos.columns}")
# nome das colunas do df
# columns = Index(['eletrodomesticos', 'preco'], dtype='object')

print(f"describe = {preco_eletrodomesticos.describe()}")
# describe =               preco
# count     6.000000
# mean   1575.000000
# std    1790.460835
# min     150.000000
# 25%     250.000000
# 50%     800.000000
# 75%    2550.000000
# max    4500.000000

print(f"info = {preco_eletrodomesticos.info()}")
# tipos de dados em cada uma das colunas e a contagem de valores não nulos em cada coluna
# <class 'pandas.core.frame.DataFrame'>
# RangeIndex: 6 entries, 0 to 5
# Data columns (total 2 columns):
#  #   Column            Non-Null Count  Dtype
# ---  ------            --------------  -----
#  0   eletrodomesticos  6 non-null      object
#  1   preco             6 non-null      int64
# dtypes: int64(1), object(1)
# memory usage: 224.0+ bytes
# info = None

print(f"head = {preco_eletrodomesticos.head()}")
# padrão: 5 primeiros el do df, passar no parametro a qtd se quiser outro valor
# head =   eletrodomesticos  preco
# 0        geladeira   3000
# 1            fogao   1200
# 2   liquidificador    200
# 3         airfryer    400
# 4        batedeira    150

print(f"tail = {preco_eletrodomesticos.tail()}")
# padrão: 5 últimos elementos do df
# tail =   eletrodomesticos  preco
# 1            fogao   1200
# 2   liquidificador    200
# 3         airfryer    400
# 4        batedeira    150
# 5     playstation5   4500


data = {
    "Grande Região": ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
    "Número de Municípios": [450, 1794, 1668, 1191, 467],
    "População em situação de rua": [4399, 22864, 49792, 16021, 8777],
    "Total de Municípios (%)": [8.10, 32.20, 29.90, 21.40, 8.40],
    "Total em situação de rua (%)": [4.32, 22.45, 48.89, 15.73, 8.62],
}

df = pd.DataFrame(data)

print(df.shape)
print(df.info())
print(df["População em situação de rua"].mean())
print(df["Total em situação de rua (%)"].max())
print(df["Total em situação de rua (%)"].min())
