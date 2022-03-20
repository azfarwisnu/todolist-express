const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "21Juni2002-",
    database: "rest",
    multipleStatements: true,
})

db.getConnection((err, connection) =>  {
    if(err){
        console.log("error ", err)
    } else {
        console.log("database connect")
    }
})

module.exports = {
    db
}