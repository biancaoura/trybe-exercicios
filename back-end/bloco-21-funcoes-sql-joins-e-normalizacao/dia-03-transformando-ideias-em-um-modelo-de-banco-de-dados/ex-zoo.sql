-- 1.
CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE animals(
	animal_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    specie VARCHAR(50) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    location VARCHAR(50) NOT NULL,
    CONSTRAINT PRIMARY KEY(animal_id)
) ENGINE=InnoDB;

CREATE TABLE managers(
	manager_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    CONSTRAINT PRIMARY KEY(manager_id)
) ENGINE=InnoDB;

CREATE TABLE employees(
	employee_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY(manager_id) REFERENCES managers(manager_id)
) ENGINE=InnoDB;

CREATE TABLE animal_employee(
	animal_id INT NOT NULL,
    employee_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(animal_id, employee_id),
    FOREIGN KEY(animal_id) REFERENCES animals(animal_id),
    FOREIGN KEY(employee_id) REFERENCES employees(employee_id)
) ENGINE=InnoDB;