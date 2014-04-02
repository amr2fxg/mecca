
var url = require('url'),
	qs = require('querystring'),
	mongoose = require('mongoose'),
	tools = require('../lib/tools'),
	hash = require('../lib/pass').hash;


exports.login = function(req, res){
	res.render('login',200);
};


exports.logout = function(req, res){
	delete req.session.user;
	res.send('',200);
};

exports.auth = function(req, res){

	require('../models/usuarios');
	
	var mUsuarios = mongoose.model('usuarios'),
		user = req.body.login_user,
		pwd = req.body.login_senha;

	console.log('Autenticando: ' + user + ' senha:' + pwd);

	// u = new mUsuarios;
	// u.usuario ='amr2fxg';
	// u.nome='fernando';
	// u.sobrenome='gomes';
	// u.email='gomes.fernando@gmail.com';
	// u.cep='05451130';
	
	// hash('maverick', function(err, salt, hash){
	//   	if (err) throw err;
			
	// 		// store the salt & hash in the "db"
	// 		u.salt = salt;
	// 		u.hash = hash;
	// 		u.pwd = 'maverick';
	// 		u.save(function(err){
	// 								if (!err) { console.log('Usuario salvo.');}
	// 								else{ throw err;}
	// 							});
	// });
	

 
   	mUsuarios.findOne({usuario: user}, {usuario:1, hash:1, salt:1}, function(err, results) {

		if (err) {

			console.log('Search Error');
			res.send('userNotFound', 200);
		}

		if(!results){

			res.send('userNotFound', 200);
			return false;

		}else {


			// apply the same algorithm to the POSTed password, applying
			// the hash against the pass / salt, if there is a match we
			// found the user
			hash(pwd, results.salt, function(err, hash){
			
				if (err) {
			
					console.log('Hash (crypto) func error! ' + err);
					res.send('', 200);
				}


				if (hash == results.hash) {

					// Regenerate session when signing in
					// to prevent fixation
					req.session.regenerate(function(){

						// Store the user's primary key
						// in the session store to be retrieved,
						// or in this case the entire user object
						req.session.user = user;
						res.send('loginOk', 200);
					});

				}else{

					res.send('incorrectPwd', 200);
				}

			});


	    }
   	});



};
