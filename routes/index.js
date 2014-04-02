
var url = require('url'),
	qs = require('querystring'),
	mongoose = require('mongoose'),
	tools = require('../lib/tools');



//////////////////////////////////////////////////////////////  Index
exports.index =  function(req, res){
		
	if(req.session.user){
	  	res.render('index', { action: 'XXXXX', lastView: req.session.lastView, auth: 'true' });

	}else{

	  	res.render('index', { action: 'XXXXX', lastView: req.session.lastView, auth: 'false' });
	}


	req.session.lastView = req.host  + req.url;
  	//res.render('index', { action: 'XXXXX', lastView: req.session.lastView });

};


//////////////////////////////////////////////////////////////  Homepage
exports.home = function(req, res){
  
  req.session.lastView = req.host + '/home.html';
  res.render('home', {lastView: req.session.lastView} );

};


//////////////////////////////////////////////////////////////  Menu
exports.menu = function(req, res){
  
  if(req.session.user) {
  	res.render('menu', {auth: 'true'});
  }else{
	res.render('menu', {auth: 'false'});
  }

};


//////////////////////////////////////////////////////////////  Busca anuncios 
exports.busca = function(req, res) {
		
	require('../models/anuncios');
	req.session.lastView = req.host  + req.url;
	
	var mAnuncios = mongoose.model('anuncios'),
		palavras = req.query.palavras, // get the terms to search
  		r = new RegExp("^" + palavras + "" , "i"); // create regex

  		
	//buscar essa array apartir do terceiro elemento que é a palavra
	mAnuncios.find({ titulo: r }, {titulo:1, valor:1, cleanurl :1, _id:0}, {limit: 15}, function(err, anuncios) {

		if(req.xhr){
	
			if(err || (anuncios=='')){
				res.send('', 200);
			}

			res.render('listProducts', { anuncios: anuncios, palavras: palavras, caminho: __dirname + '/compre/', lastView: req.session.lastView });

		}
		else{
			

			res.render('index', {  action: 'busca', results: '<p>aaaaahhhh!!</p>', ufs: [ 'Rio Grande do Sul', 'São Paulo', 'Rio de Janeiro' ],  lastView: req.session.lastView})

		}

	});


};


//////////////////////////////////////////////////////////////   Instant Search
exports.instant = function(req, res) {
			
		require('../models/instant');

		var mInstant = mongoose.model('instant'),
			palavras = req.body.palavras, // get the terms to search
			palavras = tools.str_to_slug(palavras), // escape unwanted characters
	  		r = new RegExp("^" + palavras + ""); // create regex
	  		//html ='',
	  		//itens = [];

	/*	i = new mInstant;
		i.palavras = 'ipad';
		i.score=1000;
		i.save();  */


		mInstant.find({ palavra: r }, { palavra:1, _id:0 }, {limit: 4}, function(err, results) {


			if(err || (results=='')){
				res.send('',200);
			}

			/*   Fazer por sockets.io um dia
			itens.push('<li><a class="link" href="/busca/' + palavras + '">' + palavras + '</a></li>');

			results.forEach( function(i) {
				itens.push('<li><a class="link" href="/busca/' + i.palavra + '">' + i.palavra + '</a></li>');
			});

			html = '<ul>' + itens.join('') + '</ul>'; 
			return html 
			*/

			res.render('listInstant', { results: results, termo: palavras });

		}).sort({score: -1});

};