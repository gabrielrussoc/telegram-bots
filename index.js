var russobot = require('./russobot.js');
var joaobot = require('./joaobot.js');
var lispectorbot = require('./lispector.js');

var http = require('http');

var server = http.createServer(function(request, response) {
  request.pipe(response);
}).listen(process.env.OPENSHIFT_NODEJS_PORT || 5000);
