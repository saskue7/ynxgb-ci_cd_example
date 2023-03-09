const http = require('http');

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end("Hello World! you thought tht was it hahhahha amf you have not seen the world u lazy bum");
}).listen(8080);

console.log('Server running at http://0.0.0.0:8080/');
