DROP SCHEMA IF EXISTS normalization;
CREATE SCHEMA normalization;
USE normalization;

CREATE TABLE funcionarios(
	funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    data_cadastro VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

INSERT INTO funcionarios(nome, sobrenome, email, telefone, data_cadastro)
VALUES
	('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
    ('André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05'),
    ('Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
    ('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

CREATE TABLE setores(
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    setor_nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

INSERT INTO setores(setor_nome)
VALUES
	('Administração'),
    ('Vendas'),
    ('Operacional'),
    ('Estratégico'),
    ('Marketing');

CREATE TABLE funcionario_setor(
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY(funcionario_id) REFERENCES funcionarios(funcionario_id),
    FOREIGN KEY(setor_id) REFERENCES setores(setor_id),
    PRIMARY KEY(funcionario_id, setor_id)
) ENGINE=InnoDB;

INSERT INTO funcionario_setor(funcionario_id, setor_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (3, 2),
    (3, 4),
    (4, 5);