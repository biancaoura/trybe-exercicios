-- 1. exibir todos os filmes
SELECT * FROM sakila.film;

-- 2. exibir somente nome, ano de lançamento e classificação de todos os filmes
SELECT CONCAT(title, ', ', release_year, ' - ', rating) FROM sakila.film;

-- 3. contar quantos filmes há
SELECT COUNT(*) FROM sakila.film;

-- 4. exibir sobrenomes únicos dos atores
SELECT DISTINCT last_name FROM sakila.actor;

-- 5. contar quantos sobrenomes únicos de atores há
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;

-- 6. ordenar sobrenomes ascendente e nomes descendente
SELECT * FROM sakila.actor
ORDER BY last_name ASC, first_name DESC;

-- 7. mostrar 5 idiomas cadastrados, menos inglês
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

-- 8. mostrar 20 primeiros filmes, incl. título, ano de lançamento, duração, class. custo de substit.
-- 	  ordenar pelo filme maior duração e menor custo de subst.
SELECT title, release_year, length, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost ASC LIMIT 20;