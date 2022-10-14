CREATE database IF NOT EXISTS faculdade;
USE faculdade;
CREATE TABLE IF NOT EXISTS biblioteca (
 nome VARCHAR(40) CHARACTER SET utf8,
 emprestado VARCHAR(3) CHARACTER SET utf8,
 quantidade INT,
 ano_lancamento INT,
 vendas INT
);
INSERT INTO faculdade.biblioteca VALUES
 ('Um Livro do Ano','Não',5,2019,350),
 ('Novas conquistas novas responsabilidades','Sim',10,2020,1412),
 ('O retorno do Jedi','Não',6,2019,845),
 ('Café ou Chá, eis a questão','Não',13,2020,1337);

SELECT nome FROM biblioteca;
SELECT COUNT(nome) FROM biblioteca;
SELECT * FROM biblioteca LIMIT 2 OFFSET 2;
SELECT * FROM biblioteca ORDER BY ano_lancamento DESC, nome ASC;
SELECT * FROM biblioteca ORDER BY quantidade DESC LIMIT 1;
SELECT * FROM biblioteca ORDER BY vendas DESC LIMIT 4;