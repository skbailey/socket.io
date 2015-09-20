var TermHeaderView = Backbone.View.extend({

  initialize: function(options){
    this.model = new Backbone.Model();
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    var term = this.model.get('description');
    this.$el.text(term);
    
    return this;
  }

});