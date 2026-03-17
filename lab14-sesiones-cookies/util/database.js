const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'rcortese',
    password: 'Sebasvic0718'
});

module.exports = pool.promise();