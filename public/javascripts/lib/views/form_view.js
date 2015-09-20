var FormView = Backbone.View.extend({

  events: {
    "submit" : "post"
  },

  initialize: function(options) {
    this.collection = new TermCollection();
  },

  post: function(evt) {
    var input;

    evt.preventDefault();
    input = this.$('input');

    this.collection.create({ description: input.val() });
    input.val('');
  }
});