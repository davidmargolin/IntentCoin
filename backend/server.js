// Node Server to obtain the request from the mobile app and route to react front end
// Request url example: http://172.16.14.138:8080/?userkey=a&contract=b
//localhost:8080/?userkey=a&contract=b

var http = require('http');
var url = require('url');
var net = require('net');

http
	.createServer(function(req, res) {
		var q = url.parse(req.url, true).query;
		var txt = { userKey: q.userkey, contract: q.contract };
		socketsend(txt);
	})
	.listen(8080);

function socketsend(txt) {
	var client = new net.Socket();
	client.connect(6666, '127.0.0.1', function() {
		console.log('Connected');
		client.write(JSON.stringify(txt));
	});

	client.on('close', function() {
		console.log('Connection closed');
	});
}

var express = require('express');
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);
server.listen(3000, () => console.log('listening on *:3000'));

// The event will be called when a client is connected.
websocket.on('connection', socket => {
	console.log('A client just joined on', socket.id);
});

socket.emit('channel-name', 'Hello world!');
