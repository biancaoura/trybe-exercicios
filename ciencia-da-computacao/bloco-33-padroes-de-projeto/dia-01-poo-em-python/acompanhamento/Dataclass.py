from dataclasses import dataclass


@dataclass
class Pessoa1:
    nome: str
    sobrenome: str


class Pessoa2:
    def __init__(self, nome: str, sobrenome: str):
        self.nome = nome
        self.sobrenome = sobrenome

    def __str__(self):
        return f"{self.nome} {self.sobrenome}"


flavio = Pessoa1("Flavio", "Silva")
carlos = Pessoa2("Carlos", "Almeida")
print(f"{flavio} e {carlos} possuem uma representação")
# Pessoa1(nome='Flavio', sobrenome='Silva') e Carlos Almeida possuem uma representação
