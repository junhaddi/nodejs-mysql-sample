const router = require('express').Router();
const getConnection = require('../config/db');

router.get('/lists', (req, res) => {
  getConnection((conn) => {
    const sql = 'SELECT * FROM BOARD';

    conn.query(sql, (err, results) => {
      if (err) {
        console.log('query is not excuted. select fail...\n' + err);
      } else {
        res.render('list.ejs', { list: results });
      }
    });

    conn.release();
  });
});

module.exports = router;
