
var socketio = require('socket.io')

module.exports.listen = function(app)
{
    io = socketio.listen(app);
 
    io.configure('development',function()
    {
        io.set('log level', 1);                    // reduce logging
            //io.set('transports', ['websocket']);
            //io.set('transports', ['websocket', 'xhr-polling']);
            //io.enable('log');
    });

    io.configure('production',function()
    {
        io.enable('browser client minification');  // send minified client
        io.enable('browser client etag');          // apply etag caching logic based on version number
        io.set('log level', 1);                    // reduce logging
        io.set('transports', [                     // enable all transports (optional if you want flashsocket)
            'websocket'
          , 'flashsocket'
          , 'htmlfile'
          , 'xhr-polling'
          , 'jsonp-polling'
        ]);
    });

/*
    io.sockets.on('connection', function (socket)
    {
        console.log("New connection: " + socket.id);

        socket.on('disconnect', function() {
            console.log("device " + socket.id + " disconnected");
        });

        socket.on('reloadAccounts',function(data)
        {
            var accounts=['account1','account2']
            socket.emit('news',accounts)
        });
    }); 

    exports.sockets = io.sockets; 
*/

    return io
}