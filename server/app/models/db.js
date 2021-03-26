const mysql = require('mysql')
const dbConfig = require('../config/db.config')


const connection = mysql.createConnection({
    connectionLimit: dbConfig.CONNECTION_LIMIT,
    database: dbConfig.DB,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD
})

connection.connect(err => {
    if (err) throw err
    console.log('Connected to database!')
})

module.exports = connection
