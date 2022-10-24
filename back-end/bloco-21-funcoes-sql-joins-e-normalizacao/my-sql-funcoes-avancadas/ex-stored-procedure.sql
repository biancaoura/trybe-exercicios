-- 1.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowTenMostPopularActors()
BEGIN
	SELECT actor_id, COUNT(film_id) AS `movie_appearances`
    FROM film_actor
    GROUP BY actor_id
    ORDER BY movie_appearances DESC
    LIMIT 10;
END $$

DELIMITER ;
-- 
CALL ShowTenMostPopularActors();

-- 2.
USE sakila;
DELIMITER $$

CREATE PROCEDURE SearchMovieByCategory(IN filmCategory VARCHAR(100))
BEGIN
	SELECT f.film_id, f.title, fc.category_id, c.name
    FROM film AS f
    INNER JOIN film_category AS fc
    ON f.film_id = fc.film_id
    INNER JOIN category AS c
    ON fc.category_id = c.category_id
    WHERE c.name = filmCategory;
END $$

DELIMITER ;
-- 
CALL SearchMovieByCategory('Children');

-- 3.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowCustomerStatus(
	IN customerEmail VARCHAR(100),
    OUT isActive BOOL
)
BEGIN
	SET isActive = (
		SELECT active
		FROM customer
		WHERE email = customerEmail
    );
END $$

DELIMITER ;
-- 
SELECT @status;
CALL ShowCustomerStatus('BARBARA.JONES@sakilacustomer.org', @status);
SELECT @status;