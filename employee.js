var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require('console.table');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "lidd0501",
    database: "employeeDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    beginPrompt()
});

function beginPrompt() {
    inquirer.prompt([
        {
            type: "list",
            name: "promptAnswer",
            message: "What would you like to do?",
            choices: [
                "Add Department", "View Department", 
                "Add Role", "View Role", 
                "Add Employee", "View Employee", 
                "Exit"]
        }
    ]).then(data => {
        console.log(data)
        switch(data.prompt){
            case "Add Department":
                departmentsAdd();
            case "View Department":
                departmentsView();
            case "Exit":
                connection.end()
        
        }
    })
}
function departmentsAdd() {
    console.log("Inserting a new product...\n");
    inquirer.prompt([
        {
            type: "input",
            name: "departmentName",
            message: "What would you like to name your department?",
        }
    ]).then(answers => {
        console.log(answers)
        connection.query("INSERT INTO department SET ?",
        {
            department_name: answers.departmentName
        },
         (err, res) => {
            if(err) throw err;
            console.log("Department Added")
            beginPrompt()
        })
    })
};
function rolesAdd() {

}
function employeesAdd() {

}
function departmentsView() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        beginPrompt();
    })
};
function rolesView() {

}
function employeesView() {

}
function rolesUpdate() {

}

