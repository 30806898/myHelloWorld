console.log('hello my world, node.js') ; 

var http = require("http");
http.createServer(function(request, response) {
	console.log('my helloworld Server execute running at http://127.0.0.1:8888/');
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<b>Hello World!</b>");
	response.end();
}).listen(8888); 

console.log('my helloworld Server Start running at http://127.0.0.1:8888/');