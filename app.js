
/**
 * Module dependencies.
 */

var express = require('express'),
	routes 	= require('./routes'),
	user 	= require('./routes/user'),
	http 	= require('http'),
	path 	= require('path'),
	//piler	= require('piler'),
	//util 	= require('lib'),
	app 	= express(),

	events 	= require('events'),
	eventEmitter = new events.EventEmitter(),

	server 	= http.createServer(app),
	io 		= require('socket.io').listen(server),

	mongoose  = require('mongoose')

	oneDay = 86400, //24 * 60 * 60
	oneYear = 315576000; // 365 * 24 * 60 * 60

	//clientjs = piler.createJSManager(),
	//clientcss = piler.createCSSManager();

mongoose.connect('mongodb://localhost/mecca');
//mongoose.model('YourModelName', require('./models/yourmodelname').YourModelName;

// all environments
app.set('port', process.env.PORT || 3000);
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
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(express.static(path.join(__dirname, 'public'))); // , { maxAge: oneYear } ));
app.use(app.router);

/*
app.configure(function(){

    clientjs.bind(app, server);
    clientcss.bind(app, server);

    clientcss.addFile(__dirname + "/public/css/normalize.css");
    clientcss.addFile(__dirname + "/public/css/grid_perc.css");
    clientcss.addFile(__dirname + "/public/css/dm.css");
    clientcss.addFile(__dirname + "/public/css/ui.css");
    clientcss.addFile(__dirname + "/public/css/mecca.css");
    clientcss.addFile(__dirname + "/public/css/jquery.gritter.css");

    //clientjs.addUrl("http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.js");
    //clientjs.addFile(__dirname + "/client/hello.js");
});
*/

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', routes.index( { csstags: 'helloooo'} ));
app.post('/busca/*', routes.busca);
app.post('/home', routes.home);
app.post('/instant/*', routes.instant);


/*app.all('*', function(req, res){
  res.send(404);
}) */


server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});