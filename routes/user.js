var url = require('url'),
	qs = require('querystring'),
	mongoose = require('mongoose'),
	tools = require('../lib/tools');


exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.login = function(req, res){

	require('../models/usuarios');
	req.session.lastView = req.host  + req.url;
	
	var mAnuncios = mongoose.model('anuncios'),


}