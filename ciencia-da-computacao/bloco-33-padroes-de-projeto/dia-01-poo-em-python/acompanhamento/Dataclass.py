from dataclasses import dataclass


@dataclass
class Pessoa1:
    nome: str
    sobrenome: str


class Pessoa2:
    def __init__(self, nome: str, sobrenome: str):
        self.nome = nome
        self.sobrenome = sobrenome

    def __repr__(self):
        return f"Pessoa2(nome='{self.nome}', sobrenome='{self.sobrenome}')"


flavio = Pessoa1("Flavio", "Silva")
carlos = Pessoa2("Carlos", "Almeida")
print(f"{flavio} e {carlos} possuem uma representação")
# Pessoa1(nome='Flavio', sobrenome='Silva') e Pessoa2(nome='Carlos', sobrenome='Almeida') possuem uma representação
