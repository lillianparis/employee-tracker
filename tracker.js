const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "employee_DB"
});

// connects to mysql server and sql database

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});
// installed npm install, npm init -y and npm install mysql (10/25/2020)
// Build a command-line application that at a minimum allows the user to:
//   * Add departments, roles, employees
//   * View departments, roles, employees
//   * Update employee roles 

// Creating a function prompting the user what action they should take...
// Referencing 12, activity 10-greatBayBasic
function start() {
  inquirer
    .prompt({
      name: "actionrequired",
      type: "Question",
      message: "What would you like to do?",
      choices: ["View All Employees", "View All Employees by Department", "View All Employees by Role", "Add Employee", "Add Role", "Add Department", "Remove Employee", "Remove Role", "Remove Department", "Update Employee Role", "EXIT"],
      default: "Use arrow keys"
    })
    // Based on the users answer, they will be prompted with their response.
    // Referencing activity 13
    .then(function (answer) {
      switch (answer.action) {
        case "View All Employees":
          viewEmployee();
          break;

        case "View All Employees by Department":
          viewDepartment();
          break;

        case "View All Employees by Role":
          viewRole();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Remove Employee":
          removeEmployee();
          break;

        case "Remove Role":
          removeRole();
          break;

        case "Remove Department":
          removeDepartment();
          break;

        case "Update Employee Role":
          updateEmployee();
          break;

        case "Exit":
          exitList();
          break;
      }
    });
}
// Add employee function
function addEmployee() {
  inquirer
    .prompt([
      // The user is prompted with questions that will be displayed in the view portion of the program.
      {
        name: "employee's name",
        type: "input",
        message: "What is the employee's fist name",
      },
      {
        name: "employee's last name",
        type: "input",
        message: "What is the employee's last name?"
      },
      {
        name: "employee role",
        type: "role",
        message: "What is the employee's role"
      },
      {
        message: "manager information",
        type: "number",
        message: "What is the employee's manager Id"
      },
    ])
    // Adds to mysql by placing the information into a table with rows and columns
    .then(function (answer) {
      conecction.query("INSERT INTO employee SET ?", [answer], function (err) {
        if (err) throw (err);
        console.log("Complete!");
        start();
      })
    })
}
// One question is provided for the add department function
function addDepartment() {
  inquirer
    .prompt([
      {
        name: "input",
        type: "input",
        message: "What is the department name you would like to add?"
      },
    ]
    )
    .then(function (answer) {
      conecction.query("INSERT INTO department SET ?", [answer], function (err) {
        if (err) throw (err);
        console.log("Its been added!")
        start();
      });
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        name: "role",
        type: "input",
        message: "What is the role title"
      },
      {
        name: "money",
        type: "salary",
        message: "What is the salary for this role?"
      },
      {
        name: "department",
        type: "id",
        message: "What is the department ID for this role?"
      },
    ])
    .then(function (answer) {
      conecction.query("INSERT INTO SET ?, [answer", function (err) {
        if (err) throw (err);
        console.log("Complete!");
        start();
      })
    })
}

// View department, employee and role

function viewEmployee() {
  conecction.query("SELECT employeerole.title, employeerole.salary, department")
}


// update employee
function updateEmployee() {
  conecction.query("SELECT * FROM employee", function (err, res) {
    console.log(res);
    const employees = res.map(element => {
      return (
        // Comes from employeetrack.sql
        {
          name: element.first_name + element.last_name,
          value: element.id
        }
      )
    })
    console.log(employees);
    connection.query("SELECT * FROM employee", function (err, res) {
      console.log(res);
      let employeeRoles = res.map(element => {
        return (
          // comes from employeetrack.sql
          {
            name: element.role_id,
            value: element.id
          }
        )
      })
      console.log(employeeRroles);

      inquirer.prompt([
        {
          type: "list",
          name: "employee",
          message: "Which employee would you like to update?"
        },
        {
          type: "list",
          name: "role",
          message: "What is the employee's new role?"
        }
      ]).then(answers => {
        console.log(answers)
        conecction.query("UPDATE employee SET role_id = ? WHERE id = ?", [answers.employee, answers.role],
          function (err, res) {
            if (err) throw (err);
            console.log(res.affectedRows + "Your employee has been updated!\n");
            start();
          });
      });
    })
  })
}

// Begin deletion of roles, employees and departments
function removeEmployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "role",
      message: "Please enter employee role ID"
    }
  ]).then(answers => {
    connection.query("DELETE FROM WHERE ?", {
      id: answers.id
    })
  })
}