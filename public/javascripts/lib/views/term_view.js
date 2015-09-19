var TermView = Backbone.View.extend({
  tagName: "li",
  className: "search-term",
  template: _.template('<span><%= model.get("description") %></span>'),

  render: function(){
    var markup = this.template({ model: this.model });
    this.$el.append(markup);
    return this;  
  }
});