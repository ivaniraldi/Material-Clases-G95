CREATE DATABASE clases_g95;

CREATE TABLE
    demo (id SERIAL, Name VARCHAR(50), Hint TEXT);

CREATE TABLE
    Products (
        id INTEGER,
        name VARCHAR(50),
        price float,
        id_category INTEGER
    );

CREATE TABLE
    Users (
        id INTEGER,
        email VARCHAR(50),
        password VARCHAR(20)
    );

CREATE TABLE
    Categories (id INTEGER, name VARCHAR(15));

INSERT INTO
    demo (id, Name, Hint)
VALUES
    (1, 'Agustin', 'JavaScript'),
    (2, 'Romina', 'SQL'),
    (3, 'Jorge', 'HTML'),
    (4, 'Santiago', 'CSS'),
    (5, 'Gonzalo', 'TypeScript');

INSERT INTO
    Categories
VALUES
    (1, 'Ropa');

INSERT INTO
    Categories
VALUES
    (2, 'Muebles');

INSERT INTO
    Products (id, name, price)
VALUES
    (1, 'Camisa', 1500.50),
    (2, 'Pantalon', 2500.00),
    (3, 'Escritorio', 4500.00);

SELECT
    *
FROM
    demo;

SELECT
    (name, price)
FROM
    Products
WHERE
    price > 2000.00;

SELECT
    *
FROM
    Products
ORDER BY
    price DESC;


 UPDATE Products SET price = 1500.5 WHERE id= 1;

UPDATE Products SET price = 3000 WHERE id = 2;

UPDATE Products SET price = 4500 WHERE id = 3;

DELETE FROM Products WHERE id = 3;


