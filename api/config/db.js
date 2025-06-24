const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12786565',
  password: '4Wh6Yd9Etb',
  database: 'sql12786565',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to freesqldatabase.com MySQL database');
});

module.exports = connection;
