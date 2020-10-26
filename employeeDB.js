const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "employeeDB"
});

// connects to mysql server and sql database

connection.connect(function(err) {
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
function start () {
    inquirer 
    .prompt({
        name: "actionrequired",
        type: "Question",
        message: "What would you like to do?",
        choices: ["View All Employees", "View All Employees by Department", "View All Employees by Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager"],
        default: "Use arrow keys"
    })
    // Based on the users answer, they will be prompted with their response.
    .then(function(answer) {
        if (answer.viewAllEmployees === "View All Employees"){

        }
    })
}

// Referencing 12, activity 10-greatBayBasic
// Must connect to mysql