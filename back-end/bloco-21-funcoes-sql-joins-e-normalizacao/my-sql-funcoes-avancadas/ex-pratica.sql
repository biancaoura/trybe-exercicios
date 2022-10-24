-- 1.
USE pixar;

-- INNER JOIN
SELECT m.title
FROM movies AS m
INNER JOIN box_office AS b
ON m.id = b.movie_id
WHERE m.length_minutes > 110
	AND (b.domestic_sales + b.international_sales) >= 500000000;
    
-- SUBQUERY
SELECT m.title
FROM movies AS m
WHERE m.id IN (
	SELECT b.movie_id
    FROM box_office AS b
    WHERE (b.domestic_sales + b.international_sales) >= 500000000
) AND m.length_minutes > 110;

-- 2.
USE bee_movies;
-- 2.1
DELIMITER $$

CREATE TRIGGER insert_movie_year
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(NOW());
END $$

-- 2.2
CREATE TRIGGER insert_movie_log
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(NEW.movie_id, 'INSERT', NOW());
END $$

DELIMITER ;

-- 3.
USE bee_movies;
DELIMITER $$

CREATE TRIGGER update_ticket_price
	BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
	SET NEW.ticket_price = IF(NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
    INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(NEW.movie_id, 'UPDATE', NOW());
END $$

DELIMITER ;

-- 4.
USE bee_movies;
DELIMITER $$

CREATE TRIGGER delete_movie
	AFTER DELETE ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(OLD.movie_id, 'DELETE', NOW());
END $$

DELIMITER ;

-- 5.
USE pixar;

SELECT name, location
FROM theater
WHERE EXISTS (
	SELECT theater_id
    FROM movies
    WHERE theater.id = movies.theater_id
);

-- 6.
SELECT name, location
FROM theater
WHERE NOT EXISTS (
	SELECT theater_id
    FROM movies
    WHERE theater.id = movies.theater_id
);