var express = require('express');
var router = express.Router();

/* GET register page. */
router.get('/', function(req, res, next) {
  const title = 'Dashboard page';
  res.render('dashboard', { title });
});

module.exports = router;
