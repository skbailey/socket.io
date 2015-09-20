var TermListView = Backbone.View.extend({

  initialize: function(options){
    this.collection = new Backbone.Collection();
    this.listenTo(this.collection, "reset", this.render);
  },

  render: function(){
    var self = this;
    self.$el.empty();
    this.collection.each(function(term){
      self.renderSubview(term);
    })
  },

  renderSubview: function(model){
    var termView = new TermView({ model: model });
    this.$el.append(termView.render().el);
  }
});