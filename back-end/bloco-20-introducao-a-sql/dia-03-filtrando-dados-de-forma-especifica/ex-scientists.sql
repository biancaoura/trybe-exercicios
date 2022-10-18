USE Scientists;

SELECT * FROM Scientists
WHERE name LIKE '%e%';

SELECT name FROM Projects
WHERE code LIKE 'a%'
ORDER BY name ASC;

SELECT code, name FROM Projects
WHERE code LIKE '%3%'
ORDER BY name ASC;

SELECT scientist FROM AssignedTo
WHERE project IN ('AeH3', 'Ast3', 'Che1');

SELECT * FROM Projects
WHERE hours > 500;

SELECT * FROM Projects
WHERE hours BETWEEN 250 AND 800;

SELECT code, name FROM Projects
WHERE name NOT LIKE 'a%';

SELECT name FROM Projects
WHERE code LIKE '%h%';