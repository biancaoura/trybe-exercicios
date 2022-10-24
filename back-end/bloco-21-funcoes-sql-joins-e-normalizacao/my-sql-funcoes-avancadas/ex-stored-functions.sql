-- 1.
USE sakila;
DELIMITER $$

CREATE FUNCTION GetAllPayments(customerId INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_payments INT;
    SELECT COUNT(payment_id)
    FROM payment
    WHERE customer_id = customerId
    INTO total_payments;
    RETURN total_payments;
END $$

DELIMITER ;
-- 
SELECT GetAllPayments(5);

-- 2.
USE sakila;
DELIMITER $$

CREATE FUNCTION GetMovieNameByInventoryId(inventoryId INT)
RETURNS VARCHAR(300) READS SQL DATA
BEGIN
	DECLARE movie_name VARCHAR(300);
    SELECT f.title
    FROM film AS f
    INNER JOIN inventory AS i
    ON f.film_id = i.film_id
    WHERE i.inventory_id = inventoryId
    INTO movie_name;
    RETURN movie_name;
END $$

DELIMITER ;
-- 
SELECT GetMovieNameByInventoryId(10);

-- 3.
USE sakila;
DELIMITER $$

CREATE FUNCTION GetTotalMoviesByCategory(cat VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_movies INT;
	SELECT COUNT(*)
    FROM category AS c
    INNER JOIN film_category AS fc
    ON c.category_id = fc.category_id
    WHERE c.name = cat
    INTO total_movies;
    RETURN total_movies;
END $$

DELIMITER ;
-- 
SELECT GetTotalMoviesByCategory('Action');