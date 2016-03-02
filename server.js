var http = require("http"); //requires the http module that ships with Node.js and makes it accessible through the variable http
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) { //This function returns an object, and this object has a method named listen, and takes a numeric value which indicates the port number our HTTP server is going to listen on
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " recieved.");

    response.writeHead(200, {"Content-Type": "text/plain"});
    var content = route(handle, pathname);
    response.write(content);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
