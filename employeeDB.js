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
      choices: ["View All Employees", "View All Employees by Department", "View All Employees by Role", "Add Employee", "Add Role", "Add Department", "Remove Employee", "Remove Role", "Remove Department",  "Update Employee Role", "EXIT"],
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
function viewEmployee() {
  inquirer 
  .prompt ({
    name: "view",
    type: "input",
    message: "Which employee would you like to view?"
  })
  .then(function (answers) {

  })
