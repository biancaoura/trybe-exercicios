USE hr;

-- 1.
SELECT
	CONCAT(Employee.first_name, ' ', Employee.last_name) AS employee,
    CONCAT(Manager.first_name, ' ', Manager.last_name) AS manager
FROM employees AS Employee
INNER JOIN employees AS Manager
	ON Employee.manager_id = Manager.employee_id
WHERE employee.department_id <> manager.department_id;

-- 2.
SELECT
	CONCAT(Manager.first_name, ' ', Manager.last_name) AS manager,
    COUNT(*) AS employees
FROM employees AS Manager
INNER JOIN employees AS Employee
	ON Employee.manager_id = Manager.employee_id
GROUP BY Manager.employee_id;