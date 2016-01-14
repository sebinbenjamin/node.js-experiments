var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);//HTTP 200: OK
  res.end('Hello Http');
});
server.listen(8080);//Port listened by http server
