USE sakila;

-- 1.
SELECT
	actor.actor_id,
    actor.first_name,
    actor.last_name,
    film_actor.film_id
FROM actor
INNER JOIN film_actor
ON actor.actor_id = film_actor.actor_id;

-- 2.
SELECT
	staff.first_name,
    staff.last_name,
    address.address
FROM staff
INNER JOIN address
ON staff.address_id = address.address_id;

-- 3.
SELECT
	customer.customer_id,
    customer.first_name,
    customer.last_name,
    customer.email,
    customer.address_id,
    address.address
FROM customer
INNER JOIN address
ON customer.address_id = address.address_id
ORDER BY first_name DESC
LIMIT 100;

-- 4.
SELECT
	customer.first_name,
    customer.last_name,
    customer.email,
    customer.address_id,
    address.address,
    address.district
FROM customer
INNER JOIN address
ON customer.address_id = address.address_id
WHERE address.district = 'California' AND first_name LIKE '%rene%';
    
-- 5.
SELECT
	customer.first_name,
    customer.last_name,
    COUNT(address.address)
FROM customer
INNER JOIN address
ON customer.address_id = address.address_id
WHERE active = 1
GROUP BY customer.customer_id
ORDER BY first_name DESC, last_name DESC;

-- 6.
SELECT
	staff.first_name,
    staff.last_name,
    AVG(payment.amount) AS avg_payment
FROM staff
INNER JOIN payment
ON staff.staff_id = payment.staff_id
WHERE payment_date LIKE '2006%'
GROUP BY first_name, last_name;

-- 7.
SELECT * FROM film;

SELECT
	actor.actor_id,
    actor.first_name,
    actor.last_name,
    film.film_id,
    film.title
FROM actor
INNER JOIN film_actor
ON actor.actor_id = film_actor.actor_id
INNER JOIN film
ON film_actor.film_id = film.film_id;