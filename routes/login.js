var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  const title = 'Login Page';
  res.render('login', { title });
});

module.exports = router;
