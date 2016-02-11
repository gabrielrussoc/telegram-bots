var russobot = require('./russobot.js');
var joaobot = require('./joaobot.js');
var lispectorbot = require('./lispector.js');

var http = require('http');

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
        response.writeHead(200, {'Content-Type': 'text/plain'});
          response.write("Welcome to Node.js on OpenShift!\n\n");
          response.end("Thanks for visiting us! \n");
});

server.listen( port, ipaddress, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});

