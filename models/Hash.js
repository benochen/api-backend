const mongoose = require('mongoose');

const hashSchema = mongoose.Schema({
  sha1: { type: String, required: true },
  count: { type: Number, required: true },

});

module.exports = mongoose.model('Hash', hashSchema);