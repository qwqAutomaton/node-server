const http = require('http');
const getIP = require('./getClientIP').getIP;
const server = http.createServer(function (req, res) {
	console.log('request headers: \n----------');
	console.log(JSON.stringify(req.headers, null, 4));
	console.log('----------');
	console.log('client ip: ' + getIP(req));
	console.log('request for ' + req.url + ' recieved.');
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<h1>HTHJL!<br/>JHYJL!</h1>');
});
server.listen(8080, '0.0.0.0');
console.log('started');
server.on('error', err => {
	console.error(err);
});
