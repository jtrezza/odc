
var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    port = 5000,
    OK = 200,
    SERVER_ERROR = 500;

http.createServer(function(request, response) {

  var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri);

  fs.exists(filename, function(exists) {

    if(!exists || fs.statSync(filename).isDirectory()) {
      filename = 'index.html';
    }

    fs.readFile(filename, 'binary', function(err, file) {
      if(err) {
        response.writeHead(SERVER_ERROR, {'Content-Type': 'text/plain'});
        response.write(err + '\n');
        response.end();
        return;
      }

      response.writeHead(OK);
      response.write(file, 'binary');
      response.end();
    });
  });
}).listen(parseInt(port, 10));

console.log('Static file server running at\n  => http://localhost:' + port + '/\nCTRL + C to shutdown');
