// parameter parsing from url
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.param0 + " " + q.param1;
    res.end(txt);
}).listen(8002);

// Now in browser go to http://localhost:8002/?param0=Hello&param1=World
// It will show: Hello World