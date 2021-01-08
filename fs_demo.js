var http = require('http');
var fs = require('fs');

//Common use for the File System module:
// - Read files
// - Create files
// - Update files
// - Delete files
// - Rename files

http.createServer(function (req, res) {
    fs.readFile('fs_demo.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8003);

// On http://localhost:8003/ you will see content of fs_demo.html