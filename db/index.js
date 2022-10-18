const connection = require("./connection")

class DB {
    constructor(connection) {
        this.connection = connection
    }

findAllEmployees() {
    return this.connection.promise().query(
        
    )
}
}

module.exports = new DB(connection)