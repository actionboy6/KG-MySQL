const inquirer = require('inquirer');
// const express = require('express');
const mysql = require('mysql2');

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
db.query('SELECT * FROM team_db', function (err, results) {
    console.log(results);
});

inquirer
    .prompt([{
        type: 'list',
        message: 'What would you like to do?',
        choices: [{name: 'Add Department'},
                {name: 'Add Role'},
                {name: 'Add employee'}],  
    }]);


// app.get('/api/team_db', (req, res) => res.json ('./query.sq'));

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });