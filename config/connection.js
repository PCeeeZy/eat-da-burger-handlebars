// Dependencies
const mysql = require('mysql');
require('dotenv').config();

const key = require('./key');

// Connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: key.secret,
    database: 'burgers_db'
});

// Initiate Connection
connection.connect(err => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id: ${connection.threadId}`);
});

//Export connection
module.exports = connection;