
var url = require('url');
var qs = require('querystring');
var mongoose = require('mongoose');



//////////////////////////////////////////////////////////////  Index
exports.index = function(csstags) {

	return function(req, res){
		
	  	res.render('index', { csstags: csstags });
	};

};


//////////////////////////////////////////////////////////////  Homepage
exports.home = function(req, res){
  
  res.render('home');
};


//////////////////////////////////////////////////////////////  Busca anuncios 
exports.busca = function(req, res) {
		
	require('../models/anuncios');
		
	var mAnuncios = mongoose.model('anuncios'),
		u = req.originalUrl,
		palavras = url.parse(u).pathname;
		
	console.log(qs.parse(palavras, '/'));
  		
  		
	//buscar essa array apartir do terceiro elemento que é a palavra
	mAnuncios.find({}, {titulo:1, valor:1, _id:0}, function(err, products) {

		res.render('listProducts', { products: products, palavras: palavras });
	});

};


//////////////////////////////////////////////////////////////   Instant Search
exports.instant = function(req, res) {
		
	require('../models/instant');
		
	var mInstant = mongoose.model('instant'),
		u = req.originalUrl;
		palavras = url.parse(u).pathname;
		
	//console.log(qs.parse(palavras, '/'));
  	//console.log(u);
  	var r = new RegExp("^" + palavras.slice(9) + "");
	
/*	i = new mInstant;
	i.palavras = 'ipad';
	i.score=1000;
	i.save();  */


	mInstant.find({ palavra: r } , { palavra:1, _id:0 }, {limit: 3}, function(err, results) {

		console.log(r);
		console.log(results);

		if(err){
			console.log(err);
			res.send('Sem resultados');
			res.end();
		}

		if(results){
			res.render('listInstant', { palavras: results });
		}
		else
		{
			res.send('Sem resultados');
			res.end();
		}

	}).sort({score: -1});

};
