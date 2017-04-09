var http = require('http');
var fs = require('fs');

console.log("Servidor empezando en puerto 8080");

http.createServer(function(req,res){
res.writeHead(200,{'Content-Type': 'video/mp4'});
var rs = fs.createReadStream("videoExample1.mp4");
rs.pipe(res);
}).listen(8080);
