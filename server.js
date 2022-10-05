const e = require('express');
const inquirer = require('inquirer');
// const express = require('express');
const mysql = require('mysql2');
require('console.table')
const PORT = process.env.PORT || 3001;
// const app = express();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Password456',
        database: 'team_db',
    },
    console.log('Connected to database')
);

function start(){
inquirer
    .prompt([{
        type: 'list',
        name: 'userChoice',
        message: 'What would you like to do?',
        choices: [{name: 'Add Department'},
                {name: 'Add Role'},
                {name: 'Add employee'}, {name: 'Show me Employee'}, {name: 'Show me Departments'}, {name: "I'm Finished"}],  
    }]).then((data) => {

        switch (data.userChoice) {
            case 'Show me Employee':
                getEmployee()
                break;
            case 'Add Employee':
                addEmployee()
                console.log('Employee Added')
                break;
            case 'Show me Departments':
                getDepartments()
                console.log('show Dept')
                break;
            case 'Add Department':
                addDepartment()
                break;
            case 'Show me Roles':
                getRole()
                console.log('Here are the roles')
                break;
            case 'Add Role':
                addRole()
                console.log('Role added')
                break;
            default:
                console.log('bye')
                break;
        }
    })
}
    function getEmployee() {
        db.promise().query('SELECT * FROM employee').then(([data]) => {
            let employee = data
            console.table(employee)
            start()
        })

    }

    function getDepartments() {
        db.promise().query('SELECT * FROM department').then(([data]) =>{
            let departments = data
            console.table(departments)
            start()
        })

    }

    function getRole() {
        db.promise().query('SELECT * FROM role_id').then(([data]) =>{
            let roles = data
            console.table(roles)
            start()
        })
    }

    function addDepartment(department) {
        inquirer.prompt([{

            type: 'input',
            name: 'addDept',
            message: 'What is the name of the department'
        }]).then((data) => {
            db.promise().query('INSERT INTO department (department_name) VALUE(?);', data.addDept)
            start()
        })



    }

    function addEmployee(employee) {
        inquirer.prompt([{

            type: 'input',
            name: 'addEmployee',
            message: 'Who do you want to add?'
        }]).then((data) => {
            db.promise().query('INSERT INTO employee (employee_name) VALUE (?);', data.addEmployee)
            start()
        })
    }

    function addRole(roles) {
        inquirer.prompt([{

            type: 'input',
            name: 'addRole',
            message: 'What is the new role?'
        }]).then((data) => {
            db.promise().query('INSERT INTO role_id (role_id) VALUE (?);', data.addRole)
            start()
        })
    }
start()
