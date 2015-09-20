var TermCollection = Backbone.Collection.extend({
  
  url: "/terms",
  comparator: function(term){
    var createdAt = new Date(term.get('createdAt'));
    return -createdAt.getTime();
  }
});