jQuery(function($){
  // Load the models
  
  var termListView = new TermListView({ el: 'main #terms' });
  var termCollection = new TermCollection();

  termCollection.on('reset', function(terms){
    var latestTerms = terms.first(5);
    termListView.collection.reset(latestTerms);
  });

  termCollection.on('add', function(mostRecentTerm, terms){
    var latestTerms = terms.first(5);
    termListView.collection.reset(latestTerms);
  });

  termCollection
    .fetch({ reset: true })
    .done(function(){
      // Setup Socket.io

      var socket = io();
      socket.on('terms', function (term) {
        termCollection.add(term)
      });
    })
    .fail(function(){
      $.error('Could not fetch the collection');
    })
});