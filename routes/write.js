const router = require('express').Router();

module.exports = (pool) => {
  router.get('/write', (req, res) => {
    res.render('write.ejs');
  });

  router.post('/write', (req, res) => {
    const body = req.body;
    console.log(body);

    pool.getConnection((err, conn) => {
      if (err) {
        throw err;
      } else {
        const sql = 'INSERT INTO BOARD VALUES(?, ?, ?, NOW())';
        var params = [body.id, body.title, body.content];
        conn.query(sql, params, (err) => {
          if (err) {
            console.log('query is not excuted. insert fail...\n' + err);
          } else {
            res.redirect('/lists');
          }
        });
      }
    });
  });

  return router;
};
