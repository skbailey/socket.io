var mongoose = require('mongoose');

// Setup Schema
var TermSchema = mongoose.Schema({
  description: String
});

// Setup Model
var Term = mongoose.model('Expression', TermSchema);

// Export Expression Model
module.exports = Term;