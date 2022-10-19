INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
('John', 'Doe', 2, 'johndoe@email.com', 1, 1, 'johndoe', 123456),
('Ada', 'Lovelace', 4, 'ada.lovelace@email.com', 2, 1, 'lovelaceada', null);

INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer
	LIMIT 5;

INSERT INTO sakila.category (name)
VALUES
('Thriller'),
('Western'),
('Romance');

INSERT INTO sakila.store (address_id, manager_staff_id)
VALUES
(3, 3);