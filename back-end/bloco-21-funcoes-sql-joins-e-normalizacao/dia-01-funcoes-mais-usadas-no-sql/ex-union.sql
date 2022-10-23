USE sakila;

-- 1.
SELECT first_name, last_name FROM staff
UNION ALL
SELECT first_name, last_name FROM actor;

-- 2.
SELECT first_name FROM customer
WHERE first_name LIKE '%tracy%'
UNION
SELECT first_name from actor
WHERE first_name LIKE '%je%';

-- 3.
(SELECT first_name, last_name FROM actor
ORDER BY actor_id DESC
LIMIT 5)
UNION
(SELECT UCASE(first_name), UCASE(last_name) FROM staff
LIMIT 1)
UNION
(SELECT first_name, last_name FROM customer
LIMIT 5
OFFSET 14)
ORDER BY first_name ASC, last_name ASC;

-- 4.
(SELECT first_name, last_name FROM customer)
UNION ALL
(SELECT first_name, last_name FROM actor)
LIMIT 15
OFFSET 60;