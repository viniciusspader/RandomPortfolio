var http = require('http');

http.createServer( function (req, res) {
	res.writeHead(200, {'Content-type':'text/plain'});
	res.end('index.html');
}).listen(8000);
console.log('Server running at localhost:8000')