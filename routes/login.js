var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const title = 'Login Page';
  res.render('login', { title });
});

module.exports = router;
