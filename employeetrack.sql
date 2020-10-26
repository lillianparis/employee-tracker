DROP DATABASE IF EXISTS employeeDB
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department(
  id INT PRIMARY KEY,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INT PRIMARY KEY,
  title VARCHAR(30) NULL,
  salary VARCHAR(30) NULL,
  department_id VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee(
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT ,
  manager_id INT ,
  PRIMARY KEY (id)
);