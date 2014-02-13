var mongoose = require('mongoose');

var instantSchema = new mongoose.Schema({

	palavras: String,
	score: Number

}, {collection: 'instant'})

module.exports.mInstant = mongoose.model('instant', instantSchema);
