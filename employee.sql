DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    names VARCHAR(30) 
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);

INSERT INTO department (name); 
VALUES 
("Management"),
("Sales"),
("Human Resources"),
("Logistics");

INSERT INTO roles (title, salary, department_id)
VALUES 
("Manager", "100,000", "1"),
("Floor Manager", "65,000", "2"),
("Floor Leader", "55,000", "3"),
("Logistics", "50,000", "4");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("John", "Doe", "1", "1"),
("Jane", "Doe", "2", "1"),
("Iam", "McLovin", "3", "1");

SELECT*FROM department;
SELECT*FROM roles;
SELECT*FROM employee


