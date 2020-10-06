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
                "Add Department",
                "View Department",
                "Add Role",
                "View Role",
                "Add Employee",
                "View Employee",
                "Update Employee Role",
                "Exit"
            ],
            name: "UserInput",
        },
    ])
        .then(data => {
            console.log(data)
            switch (data.prompt) {
                case "Add Department":
                    departmentsAdd();
                case "View Department":
                    departmentsView();
                case "Add Role":
                    rolesAdd();
                    break;
                case "View Role":
                    rolesView();
                    break;
                case "Update Employee Role":
                    rolesUpdate();
                    break;
                case "Add Employee":
                    employeesAdd();
                    break;
                case "View Employee":
                    employeesView();
                    break;
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
                if (err) throw err;
                console.log("Department Added")
                beginPrompt()
            })
    })
};
function rolesAdd() {
    console.log("Create a new role.\n");
    inquirer.prompt([
        {
            type: "input",
            name: "roleName",
            message: "Please enter role name",
        },
        {
            type: "input",
            name: "departmentId",
            message: "what is the department ID for this role?",
        },
        {
            type: "input",
            name: "salary",
            message: "What is this roles salary?",
        },
    ])
        .then((answers) => {
            console.log(answers);
            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: answers.roleName,
                    salary: answers.salary,
                    department_id: answers.departmentId,
                },
                function (err, res) {
                    if (err) throw err;
                    console.log("Department Added");
                    beginPrompt();
                }
            );
        });
}
function employeesAdd() {
    console.log("Create a new employee.\n");
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "Please enter first name",
        },
        {
            type: "input",
            name: "last_name",
            message: "what is the last name?",
        },
        {
            type: "input",
            name: "role_id",
            message: "What is this roles id?",
        },
    ])
        .then((answers) => {
            console.log(answers);
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answers.first_name,
                    last_name: answers.last_name,
                    role_id: answers.role_id,
                },
                function (err, res) {
                    if (err) throw err;
                    console.log("Department Added");
                    beginPrompt();
                }
            );
        });
}
function departmentsView() {
    connection.query("SELECT department_name * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        beginPrompt();
    })
};
function rolesView() {
    connection.query("SELECT title, salary, department_id FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        beginPrompt();
    });
}
function employeesView() {
    connection.query(
        "SELECT first_name, last_name, role_id FROM employee",
        function (err, res) {
            if (err) throw err;
            console.table(res);
            beginPrompt();
        }
    );
}
function rolesUpdate() {

}

