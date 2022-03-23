const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "21Juni2002-",
    database: "rest",
    multipleStatements: true
})

db.connect((err, connection) => {
    if(err){
        console.log("error", err)
    } else {
        console.log("success connection")
    }
})

module.exports = {
    db
}