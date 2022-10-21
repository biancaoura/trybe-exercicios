-- 1.
SELECT active, COUNT(*) AS quantidade
FROM sakila.customer
GROUP BY active;

-- 2.
SELECT store_id, active, COUNT(*) AS quantidade
FROM sakila.customer
GROUP BY store_id, active
ORDER BY active, store_id;

-- 3.
SELECT AVG(rental_duration) as average_rental_duration, rating
FROM sakila.film
GROUP BY rating
ORDER BY average_rental_duration DESC;

-- 4.
SELECT district, COUNT(district) as quantidade
FROM sakila.address
GROUP BY district
ORDER BY quantidade DESC;

-- 5.
SELECT rating, AVG(length) AS average_length
FROM sakila.film
GROUP BY rating
HAVING average_length BETWEEN 115.0 AND 121.50
ORDER BY average_length DESC;

-- 6.
SELECT rating, SUM(replacement_cost) AS total_replacement_cost
FROM sakila.film
GROUP by rating
HAVING total_replacement_cost > 3950.50
ORDER BY total_replacement_cost ASC;