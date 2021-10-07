var express = require('express');
var router = express.Router();

/* GET register page. */
router.get('/', function(req, res, next) {
  const title = 'User profile';
  res.render('profile', { title });
});

module.exports = router;
