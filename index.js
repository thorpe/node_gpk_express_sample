'use strict';

var express = require('express');
var app = express();
var Server = require('http').Server;
var server = new Server(app);
var fs = require('fs');

server.listen(8080);

console.log("\n *START* \n");

fs.readFile('./conf/tsconfig.json', 'utf8', (err, jsonString) => {
  console.log('File data:', jsonString)
})

console.log(process.argv);


// __dirname is used here along with package.json.pkg.assets
// see https://github.com/zeit/pkg#config and
// https://github.com/zeit/pkg#snapshot-filesystem
app.use('/', express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
