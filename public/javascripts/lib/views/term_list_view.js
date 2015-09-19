var TermListView = Backbone.View.extend({

  initialize: function(options){
    //this.collection = this.collection || new Backbone.Collection();
    this.listenTo(this.collection, "reset", this.render);
    this.listenTo(this.collection, "add", this.addSubview);
  },

  render: function(){
    var self = this;
    this.collection.each(function(term){
      self.renderSubview(term);
    })
  },

  getData: function(){
    this.collection.fetch();
  },

  addSubview: function(model){
    this.renderSubview(model);
  },

  renderSubview: function(model){
    var termView = new TermView({ model: model });
    this.$el.append(termView.render().el);
  }
});