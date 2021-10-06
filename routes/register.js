var express = require('express');
var router = express.Router();

/* GET register page. */
router.get('/', function(req, res, next) {
  const title = 'Register Page';
  res.render('register', { title });
});

module.exports = router;
