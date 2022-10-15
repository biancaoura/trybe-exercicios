USE PiecesProviders;

SELECT Piece, Price FROM Provides
WHERE Provider = 'RBT';

SELECT * FROM Provides
ORDER BY Price DESC
LIMIT 5;

SELECT Provider, Price FROM Provides
ORDER BY Price DESC
LIMIT 4 OFFSET 2;

SELECT * FROM Provides
WHERE Provider = 'HAL'
ORDER BY Price DESC;

SELECT COUNT(Provider) FROM Provides
WHERE Piece = 1;