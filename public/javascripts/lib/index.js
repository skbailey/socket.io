jQuery(function($){
  // Load the models
  
  var termHeaderView = new TermHeaderView({ el: 'main h1' });
  var termListView = new TermListView({ el: 'main #terms' });
  var termCollection = new TermCollection();

  termCollection.on('reset', function(terms){
    var lastSearchedTerm = terms.first();
    termHeaderView.model.set(lastSearchedTerm.attributes)

    var priorSearchedTerms = terms.slice(1,5);
    termListView.collection.reset(priorSearchedTerms);
  });

  termCollection.on('add', function(mostRecentTerm, terms){
    termHeaderView.model.set(mostRecentTerm.attributes)

    var priorSearchedTerms = terms.slice(1,4);
    termListView.collection.reset(priorSearchedTerms);
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