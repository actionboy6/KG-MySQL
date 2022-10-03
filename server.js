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
            case 'Add Department':
                addDepartment()
                break;
            case 'Show me Departments':
                getDepartments()
                console.log('show Dept')
                break;
        
            default:
                console.log('bye')
                break;
        }
    })
}
    function getEmployee() {
        // db.query('SELECT * FROM employee', function (err, results) {
        //     let employee = [results]
        //     console.table(employee)

        // });
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
start()
// app.get('/api/team_db', (req, res) => res.json ('./query.sq'));

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });