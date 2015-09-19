jQuery(function($){
  // Load the models
  var termCollection = new TermCollection();
  var termListView = new TermListView({ el: '#terms', collection: termCollection });
  termCollection
    .fetch({ reset: true })
    .done(function(){
      // Setup Socket.io
    })
    .fail(function(){
      $.error('Could not fetch the collection');
    })
});