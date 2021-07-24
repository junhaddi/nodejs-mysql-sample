const mysql = require('mysql2');
const config = require('./dbconfig.json');

let pool = mysql.createPool(config);

function getConnection(callback) {
  pool.getConnection((err, conn) => {
    if (!err) {
      callback(conn);
    }
  });
}

module.exports = getConnection;
