var express = require('express');
var router = express.Router();
var restService = require('../mock/serve');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/userinfo', function(req, res, next) {
    res.send(restService.getUserInfo());
});

router.get('/chartdata', function(req, res, next) {
    res.send(restService.getChartData());
});

module.exports = router;
