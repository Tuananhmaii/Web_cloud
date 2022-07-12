var express = require('express');
var router = express.Router();
// var authen = require('../model/authenticated')
// var getTable = require('../model/tableDisplay')
/* GET login listing. */
router.get('/', function(req, res, next) {
  res.render('login', {message: 'THIS IS LOGIN PAGE, please login!!!'});
});



module.exports = router;