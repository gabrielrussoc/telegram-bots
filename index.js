var russobot = require('./russobot.js');
var joaobot = require('./joaobot.js');
var lispectorbot = require('./lispector.js');

//var http = require('http');
//
//var server = http.createServer(function(request, response) {
//  request.pipe(response);
//}).listen(process.env.OPENSHIFT_NODEJS_PORT || 8080);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

server.listen(server_port, server_ip_address, function () {
console.log( "Listening on " + server_ip_address + ", server_port " + port )
});
