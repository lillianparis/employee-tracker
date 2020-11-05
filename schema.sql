-- * **department**:

--   * **id** - INT PRIMARY KEY
--   * **name** - VARCHAR(30) to hold department name

-- * **role**:

--   * **id** - INT PRIMARY KEY
--   * **title** -  VARCHAR(30) to hold role title
--   * **salary** -  DECIMAL to hold role salary
--   * **department_id** -  INT to hold reference to department role belongs to

-- * **employee**:

--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager


DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employee(
   id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT ,
  manager_id INT ,
	PRIMARY KEY (id)
);

-- SELECT employee.first_name, employee.last_name, role.title, role.salary, role.department_id, department.name, manager.first_name AS manager_firstname, manager.last_name AS manager_lastname FROM employee
-- LEFT JOIN role
-- ON employee.role = role.id
-- LEFT JOIN department
-- ON role.department_id = department.id;

-- SELECT role.title, role.salary, department.name FROM role
-- LEFT JOIN department
-- ON role.department_id = department.id;


-- INSERT INTO departments (name)
-- VALUES("Military"),("Finance"),("Customer Service");

-- Insert INTO role (title, salary, department_id)
-- VALUES ("Airforce", 67000, 2),("Accountant", 110000, 3),("Sales Representative", 80000, 1);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("Lillian", "Paris", 2, 2), ("Max","Hernandez", 4, null), ("Newbie", "Feather", 2);