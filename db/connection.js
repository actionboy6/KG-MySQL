const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    //  your username
    user: "root",
    // yopur password - NOTE, add gitignore so this password doesnt go to github
    password: "Password456",
    database: "team_db"
});

connection.connect(function (err) {
    if (err) throw err;
})

module.exports = connection;