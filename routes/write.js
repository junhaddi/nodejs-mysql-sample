const router = require('express').Router();
const getConnection = require('../config/db');

router.get('/write', (req, res) => {
  res.render('write.ejs');
});

router.post('/write', (req, res) => {
  const body = req.body;

  getConnection((conn) => {
    const sql = 'INSERT INTO BOARD VALUES(?, ?, ?, NOW())';
    var params = [req.body.id, body.title, body.content];

    conn.query(sql, params, (err) => {
      if (err) {
        console.log('query is not excuted. insert fail...\n' + err);
      } else {
        res.redirect('/lists');
      }
    });

    conn.release();
  });
});

module.exports = router;
