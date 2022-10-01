const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT;
const app = express();

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

app.get('/api/team_db', (req, res) => res.json ('./query.sq'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});