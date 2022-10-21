USE hr;

-- 1.
SELECT MAX(salary) FROM employees;

-- 2.
SELECT MIN(salary) FROM employees;

-- 3.
SELECT job_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY job_id
ORDER BY avg_salary DESC;

-- 4.
SELECT SUM(salary) FROM employees;

-- 5.
SELECT
	MAX(salary),
    MIN(salary),
    SUM(salary),
    ROUND(AVG(salary), 2)
FROM employees;

-- 6.
SELECT COUNT(*)
FROM employees
WHERE job_id = 'IT_PROG';

-- 7.
SELECT job_id, SUM(salary)
FROM employees
GROUP BY job_id;

-- 8.
SELECT job_id, SUM(salary)
FROM employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

-- 9.
SELECT job_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY avg_salary DESC;

-- 10.
SELECT * FROM employees;

SELECT department_id, COUNT(employee_id) AS total_employees, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id
HAVING total_employees > 10;

-- 11.
SET sql_safe_updates = 0;

UPDATE employees
SET phone_number = REPLACE(phone_number, 515, 777)
WHERE phone_number LIKE '515%';

SET sql_safe_updates = 1;

-- 12.
SELECT * FROM employees
WHERE CHAR_LENGTH(first_name) > 7;

-- 13.
SELECT employee_id, first_name, YEAR(hire_date)
FROM employees;

-- 14.
SELECT employee_id, first_name, DAY(hire_date)
FROM employees;

-- 15.
SELECT employee_id, first_name, MONTH(hire_date)
FROM employees;

-- 16.
SELECT CONCAT(UCASE(first_name), ' ', UCASE(last_name)) FROM employees;

-- 17.
SELECT CONCAT(last_name, ' - ', hire_date) FROM employees
WHERE hire_date LIKE '1987-07%';

-- 18.
SELECT CONCAT(first_name, ' ', last_name, ' - days working at company: ', DATEDIFF(NOW(), hire_date)) FROM employees;