var Term = require('../models/term');
var express = require('express');
var router = express.Router();

module.exports = function(io){

  /* GET users listing. */
  router.get('/', function(req, res, next) {
    Term
      .find({})
      .sort('-createdAt')
      .limit(5)
      .exec(function(err, terms){
        res.format({
          html: function(){
            res.render('index', {
              terms: terms
            })
          },

          json: function(){
            res.json(terms)
          }
        });
      });
  });

  router.get('/new', function(req, res, next){
    res.render('new');
  });

  router.post('/', function(req, res, next){
    var term = new Term({
      description: req.body.description
    });

    term.save(function(err, term){
      if (err) throw err;

      io.sockets.emit('terms', term);
      res.send(term);
    });
  });

  return router;
};