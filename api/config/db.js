const mysql = require('mysql2/promise');

let connection; // cached connection

async function getConnection() {
  if (connection && connection.connection._closing === false) {
    // existing open connection, reuse it
    return connection;
  }

  connection = await mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12785324',
    password: 'tkIUpEQZvY',
    database: 'sql12785324',
    port: 3306,
    connectTimeout: 10000 // 10 seconds
  });

  console.log('Connected to freesqldatabase.com MySQL database');
  return connection;
}

module.exports = getConnection;
