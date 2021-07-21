const router = require('express').Router();

module.exports = (conn) => {
  router.get('/lists', (req, res) => {
    const sql = 'SELECT * FROM BOARD';
    conn.query(sql, (err, rows, fields) => {
      if (err) {
        console.log('query is not excuted. select fail...\n' + err);
      } else {
        res.render('list.ejs', { list: rows });
      }
    });
  });

  return router;
};
