var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

// Setup Schema
var TermSchema = mongoose.Schema({
  description: String
});
TermSchema.plugin(timestamps);

// Setup Model
var Term = mongoose.model('Term', TermSchema);

// Export Expression Model
module.exports = Term;