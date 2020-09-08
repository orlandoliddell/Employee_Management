DROP DATABASE IF EXISTS tracker;
CREATE DATABASE tracker;

USE tracker;

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT NOT NULL, 
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY(id)
);

CREATE TABLE employee (
 id INTEGER AUTO_INCREMENT NOT NULL,
 first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR (30),
 role_id INTEGER,
  manager_id INT,
  PRIMARY KEY(ID)
);

INSERT INTO department (department_name)
VALUES 
("Management"),
("Sales"),
("Human Resources"),
("Logistics");

INSERT INTO role (title, salary, department_id)
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
SELECT*FROM role;
SELECT*FROM employee;
