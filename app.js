const fs = require('fs')
const url = require('url')
const http = require('http')

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let filename = `${q.pathname.slice(1)}`;
    console.log(filename)
    fs.readFile((filename || 'index.html'), function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      } 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8080); 