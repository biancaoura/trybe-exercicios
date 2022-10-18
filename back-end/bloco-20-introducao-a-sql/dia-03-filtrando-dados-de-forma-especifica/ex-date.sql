USE sakila;

SELECT COUNT(payment_id) FROM payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT COUNT(payment_id) FROM payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

SELECT
	DATE(rental_date) AS Date,
	YEAR(rental_date) AS Year,
	MONTH(rental_date) AS Month,
	HOUR(rental_date) AS Hour,
	MINUTE(rental_date) AS Minute,
	SECOND(rental_date) AS Second
FROM rental
WHERE rental_id = 10330;

SELECT * FROM payment
WHERE DATE(payment_date) = '2005-07-28'
AND HOUR(payment_date) >= 22;