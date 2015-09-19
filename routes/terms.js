var Term = require('../models/term');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/terms', function(req, res, next) {
  Term
    .find({})
    .exec(function(err, terms){
      res.format({
        html: function(){
          res.render('terms', {
            terms: terms
          })
        },

        json: function(){
          res.json(terms)
        }
      });
    });
});

router.post('/terms', function(req, res, next){
  var term = new Term({
    description: req.body.description
  });

  term.save(function(err, term){
    if (err) throw err;

    res.send(term);
  });
});

module.exports = router;
