const router = require('express').Router();

module.exports = (pool) => {
  router.get('/lists', (req, res) => {
    pool.getConnection((err, conn) => {
      if (err) {
        throw err;
      } else {
        const sql = 'SELECT * FROM BOARD';
        conn.query(sql, (err, results) => {
          if (err) {
            console.log('query is not excuted. select fail...\n' + err);
          } else {
            res.render('list.ejs', { list: results });
          }
        });
      }
    });
  });

  return router;
};
