-- MOD / DIV
-- 1.
SELECT
	IF (15 MOD 2 = 0, 'Par', 'Ímpar')
    AS 'Par ou Ímpar';
    
-- 2.
SELECT 220 DIV 12;

-- 3.
SELECT IF(220 MOD 12 = 0, 'Não', CONCAT('Sim, ', 220 MOD 12));

-- RANDOM
-- 1.
SELECT ROUND(15 + RAND() * 5);

-- 2.
SELECT ROUND(15.7515971, 5);

-- 3.
SELECT FLOOR(39.494);

-- 4.
SELECT CEIL(85.234);

-- FUNÇÕES DE AGREGAÇÃO
-- 1.
SELECT
	AVG(length) AS 'Média de Duração',
    MIN(length) AS 'Duração Mínima',
    MAX(length) AS 'Duração Máxima',
    SUM(length) AS 'Tempo de Exibição Total',
    COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;
    