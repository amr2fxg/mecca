var mongoose = require('mongoose');

var instantSchema = new mongoose.Schema({

	palavra: String,
	score: Number

}, {collection: 'instant'})

module.exports.mInstant = mongoose.model('instant', instantSchema);
