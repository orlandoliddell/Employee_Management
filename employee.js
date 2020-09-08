var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "lidd0501",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

function departmentsAdd() {

};
function rolesAdd() {

}
function employeesAdd() {

}
function departmentsView() {

};
function rolesView() {

}
function employeesView() {

}
function rolesUpdate() {

}

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
  ])
  .then(function(response) {

  });
