// Node Server to obtain the request from the mobile app and route to react front end
// Request url example: http://172.16.14.138:8080/?userkey=a&contract=b

var http = require('http');
var url = require('url');
var net = require('net');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true).query;
  var txt = { userKey: q.userkey, contract: q.contract};
  socketsend(txt)
}).listen(8080);

function socketsend(txt) {
	var client = new net.Socket();
	client.connect(8001, '127.0.0.1', function() {
	console.log('Connected');
	client.write(JSON.stringify(txt));
});

client.on('close', function() {
	console.log('Connection closed');
});
}
