
/**
 * Module dependencies.
 */

var express = require('express'),
	routes 	= require('./routes'),
	user 	= require('./routes/user'),
	http 	= require('http'),
	path 	= require('path'),
	app 	= express(),
	events 	= require('events'),
	eventEmitter = new events.EventEmitter(),
	validator = require('validator'),

	server 	= http.createServer(app),
	io 		= require('./lib/sockets').listen(server),

	mongoose  = require('mongoose'),

	oneDay = 86400, //24 * 60 * 60
	oneYear = 315576000; // 365 * 24 * 60 * 60


mongoose.connect('mongodb://admin:m3cc4%@ds063218.mongolab.com:63218/mecca');
//mongoose.model('YourModelName', require('./models/yourmodelname').YourModelName;

// all environments
app.set('port', process.env.PORT || 5000);
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('path',  path.join(__dirname, '/'));
app.set('view engine', 'html');
app.set('view options', { layout: false });

app.use(express.compress());
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('M3CC41S4W3S0M3'));
app.use(express.session());

// Development & Production Settings
if ('development' == app.get('env')) {
	
	app.use(express.errorHandler());
	app.use(express.static(path.join(__dirname, 'public')));
}
else {  // Production Settings
	app.use(express.static(path.join(__dirname, 'public'), { maxAge: oneYear } ));  // Use .js .css versioning
	console.log('<<< Using MaxAge Caching >>>');
}
	
app.use(app.router);


// Routes
app.get('/', routes.index);
app.get('/menu', routes.menu);
app.get('/busca/*', routes.busca);
app.post('/instant/*', routes.instant);
app.post('/home', routes.home);
app.post('/user/auth', user.auth);
app.get('/user/login', user.login);
app.get('/user/logout', user.logout);
app.get('/user/new', user.new);
app.post('/user/validate', user.validate);


/*app.all('*', function(req, res){
  res.send(404);
}) */


server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});


//IO connections 
/*
io.on('connection', function(client) {
	console.log('Novo cliente conectado.');

	client.on('instantSearch', function(palavras) {
		
		routes.instant(client);

		client.emit('instantResult', {data: 'aaaaaaaaa'} );
	});

});*/	