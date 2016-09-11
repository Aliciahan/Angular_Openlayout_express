var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ex01',function(req,res,next){
    res.render('ex1',{title:'simple example'});
});


router.get('/ex02',function(req,res,next){
    res.render('ex2',{title:'simple example'});
});

module.exports = router;
