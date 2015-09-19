jQuery(function($){
  // Load the models
  
  var termCollection = new TermCollection();
  var termListView = new TermListView({ el: '#terms', collection: termCollection });
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