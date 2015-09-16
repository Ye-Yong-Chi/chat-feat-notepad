var express = require('express');
var app = express();


var server = app.listen(3000, function () {
  console.log('Example app listening');
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/user', function (req, res) {
  res.send('OMG World!');
});