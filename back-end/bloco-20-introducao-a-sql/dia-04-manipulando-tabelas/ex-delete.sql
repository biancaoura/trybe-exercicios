SELECT * FROM sakila.actor
WHERE first_name = 'karl';

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE actor_id = 12;

SELECT * FROM sakila.actor
WHERE first_name = 'matthew';

DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE actor_id IN (8, 103, 181);

SELECT * FROM film_text
WHERE description LIKE '%saga%';

SET sql_safe_updates=0;

DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

SET sql_safe_updates=1;

TRUNCATE sakila.film_actor;

TRUNCATE sakila.film_category;