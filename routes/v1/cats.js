var express = require('express');
var router = express.Router();
var cats = require('../../models/cats')

/* GET home page. */
router.get('/', function(req, res, next) {
  cats.all()
  .then(function(cats){
    res.json({ cats })
  })
});

router.get('/:id', function(req, res){
  cats.findById(1)
  .then(function(cats){
    res.json({cats})
  })
})

module.exports = router;
