DROP DATABASE IF EXISTS team_db;

CREATE DATABASE team_db;

USE team_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
)

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name: VARCHAR(30)
    last_name: VARCHAR(30)
    role_id: INT
    manager_id INT
   

CREATE TABLE role (
    id INT PRIMARY KEY
    title: VARCHAR(30)
    salary: DECIMAL
    department_id: INT
)