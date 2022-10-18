// const express = require('express');
// const inquirer = require('inquirer');
// const mysql = require('mysql2');
// require('console.table')
// const PORT = process.env.PORT || 3001;

const { prompt } = require("inquirer")
const db = require("./db")
require("console.table")
function start(){

prompt([{
        type: 'list',
        name: 'userChoice',
        message: 'What would you like to do?',
        choices: [{name: 'Add Department'},
                {name: 'Add Role'},
                {name: 'Add Employee'}, {name: 'Show me Employee'}, {name: 'Show me Departments'}, {name: 'Show me Roles'}, {name: "I'm Finished"}],  
    }]).then((data) => {

        switch (data.userChoice) {
            case 'Show me Employee':
                getEmployee()
                break;
            case 'Add Employee':
                addEmployee()
                break;
            case 'Show me Departments':
                getDepartments()
                break;
            case 'Add Department':
                addDepartment()
                break;
            case 'Show me Roles':
                getRole()
                break;
            case 'Add Role':
                addRole()
                break;
            default:
                console.log('bye')
                break;
        }
    })
}
    function getEmployee() {
        console.log('employee')
        db.promise().query('SELECT * FROM employee').then(([getEmployeeData]) => {
            let employee = getEmployeeData
            
            console.table(getEmployeeData)
            start()
        })

    }

    function getDepartments() {
        db.promise().query('SELECT * FROM department').then(([getDeptData]) =>{
            let departments = getDeptData
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
        prompt([{

            type: 'input',
            name: 'addDept',
            message: 'What is the name of the department'
        }]).then((addDeptData) => {
            db.promise().query('INSERT INTO department (department_name) VALUE(?)', addDeptData.addDept)
            start()
        })



    }

    function addEmployee(employee) {
        prompt([{

            type: 'input',
            name: 'addEmployee',
            message: 'Who do you want to add?'
        }]).then((addEmplData) => {
            db.promise().query('SELECT * FROM employee', addEmplData.addEmpl)
            start()
        })
    }

    function addRole() {
        prompt([{

            type: 'input',
            name: 'title',
            message: 'What is the new title?'
        },
        {

            type: 'input',
            name: 'salary',
            message: 'What is the salary?',
        },
        {
            type: 'input',
            name: 'department',
            message: 'What is the department_id'
        }])
        .then((addRoleData) => {
            db.promise().query('INSERT INTO role (title, salary, department_id) VALUE (?)', addRoleData.addRole).then(data => {
                start()
            }).catch( (err) => {
                console.log(err)
            })
        })}
