var express = require("express");
var app = new express();
var http = require("socket.io")(http);

var Log= require('log'),
log = new Log('debug')

var port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public"));

app.listen(port,function(){
log.info('Servidor escuchando en el puerto %s',port)
});

