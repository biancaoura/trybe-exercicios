USE sakila;

-- 1. Retorne o id de customer e a média de dias que uma pessoa usuária permanece com o produto alugado (tabela rental);
SELECT customer_id, ROUND(AVG(DATEDIFF(return_date, rental_date)), 1) AS average_renting_time
FROM rental
GROUP BY customer_id;

-- 2. Retorne o tempo máximo, mínimo e a média de tempo dos filmes lançados em 2006 por rating (tabela film);
SELECT rating,
MAX(length) AS max_length,
MIN(length) AS min_length,
AVG(length) AS avg_length
FROM film
GROUP BY rating, release_year
HAVING release_year = 2006;

-- 3. Quantas pessoas usuárias temos por cidade (tabela address);
SELECT city_id, COUNT(*)
FROM address
GROUP BY city_id;

-- 4. Qual o valor total (amount) recebido dentro de cada mês (tabela payment)?
SELECT MONTH(payment_date) AS month, YEAR(payment_date), SUM(amount) AS month_sum
FROM payment
GROUP BY month;

-- 5. Retorne a quantidade de itens alugados pelo preço (amount) que sejam menores ou iguais a 1.99 (tabela payment)
SELECT amount, COUNT(rental_id) AS item_amount
FROM payment
GROUP BY amount
HAVING amount <= 1.99
ORDER BY amount ASC;

-- 6. Qual valor arrecadado (soma) por valor de produto que tem mais saída por mês e ano? (tabela payment)
SELECT
	amount,
	SUM(amount) AS total,
    DATE_FORMAT(payment_date, '%Y-%m') AS ano_mes
FROM payment
GROUP BY amount, YEAR(payment_date), MONTH(payment_date)
ORDER BY ano_mes DESC;

SELECT 
  amount,
  SUM(amount) AS `soma`,
  YEAR(payment_date),
  MONTH(payment_date)
FROM
  sakila.payment
GROUP BY amount , YEAR(payment_date) , MONTH(payment_date)
ORDER BY `soma` DESC;