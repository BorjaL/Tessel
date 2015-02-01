var http = require('http');
var tessel = require('tessel');

var listener = function( request, response ) {

  console.log("Got a request to " + request.url );

  var url = request.url

  if (url == "/"){
    tessel.led[0].toggle();
    response.send(200);
  }
};

var server = http.createServer(listener).listen( 8000 );