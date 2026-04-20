const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'portal_ufc_db',
    password: ''
});

module.exports = pool.promise();