USE pixar;

-- 1.
SELECT
	mv.title,
    bo.domestic_sales,
    bo.international_sales
FROM movies AS mv
INNER JOIN box_office AS bo
ON mv.id = bo.movie_id;

-- 2.
SELECT
	mv.title,
    (bo.domestic_sales + bo.international_sales) AS `total_sales`
FROM movies AS mv
INNER JOIN box_office AS bo
ON mv.id = bo.movie_id
WHERE bo.international_sales > bo.domestic_sales;

-- 3.
SELECT
	mv.title,
    bo.rating
FROM movies AS mv
INNER JOIN box_office AS bo
ON mv.id = bo.movie_id
ORDER BY bo.rating DESC;

-- 4.
SELECT theater.*, movies.*
FROM theater
LEFT JOIN movies
ON theater.id = movies.theater_id
ORDER BY theater.name ASC;

-- 5.
SELECT theater.*, movies.*
FROM theater
RIGHT JOIN movies
ON theater.id = movies.theater_id
ORDER BY theater.name ASC;

-- 6.
SELECT m.*, b.rating
FROM movies AS m
INNER JOIN box_office AS b
ON m.id = b.movie_id
WHERE b.rating > 8 AND m.theater_id IS NOT null;