
var mongoose = require('mongoose');

var anunciosSchema = new mongoose.Schema({

	id_anuncios: Number,
	id_usuarios: Number,
	id_anunciostipo: Number,
	renovado: Boolean,
	titulo: String,
	subtitulo: String,
	estado: String,
	quant: Number,
	valor: Number,
	data: { type: Date, default: Date.now },
	//hora: Date              ** Reduntante com o campo data
	vencimento: Date,
	pagtodinheiro: Boolean,
	pagtocartao: Boolean,
	pagtodeposito: Boolean,
	retiraemmaos: Boolean,
	garantia: Boolean,
	fretegratis: Boolean

},{collection: 'anuncios'})


module.exports.mAnuncios = mongoose.model('anuncios', anunciosSchema);
