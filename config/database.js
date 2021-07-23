const mysql = require('mysql2');

const db_info = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1qaz@wsx',
  database: 'db_test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

module.exports = {
  init: function () {
    return mysql.createPool(db_info);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) {
        console.error('mysql connection error : ' + err);
      } else {
        console.log('mysql is connected successfully!');
      }
    });
  },
};
