
var mongoose = require('mongoose');

var usuariosSchema = new mongoose.Schema({

	cpf: String,
	nome: String,
	sobrenome: String,
	email: String,
	pwd: String,
	telefone: String,
	cep: String,
	cidade: String,
	inicio: { type: Date, default: Date.now },
	hash: String,
	salt: String

},{collection: 'usuarios'})


module.exports.musuarios = mongoose.model('usuarios', usuariosSchema);
