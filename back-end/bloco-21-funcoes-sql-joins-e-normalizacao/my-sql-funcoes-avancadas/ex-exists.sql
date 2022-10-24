USE hotel;

SELECT * from carSales;
-- 1.
SELECT id, title
FROM books
WHERE NOT EXISTS (
	SELECT book_id
    FROM books_lent
    WHERE books.id = books_lent.book_id
);

-- 2.
SELECT id, title
FROM books
WHERE EXISTS (
	SELECT book_id
    FROM books_lent
    WHERE books.id = books_lent.book_id
    AND books.title LIKE '%lost%'
);

-- 3.
SELECT name
FROM Customers
WHERE NOT EXISTS (
	SELECT customerID
    FROM CarSales
    WHERE Customers.CustomerId = CarSales.CustomerID
);

-- 4.
SELECT c.name, cs.carID
FROM Customers AS c
INNER JOIN CarSales AS cs
ON c.CustomerId = cs.CustomerID
WHERE EXISTS (
	SELECT customerID
    FROM CarSales AS cs
    WHERE c.CustomerId = cs.CustomerID
);