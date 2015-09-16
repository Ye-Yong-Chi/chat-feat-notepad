var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var bodyParser = require('body-parser')

http.listen( 3000, function(){
	console.log('start NoteServer\n');
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.sendFile(__dirname + '/p.html');
});


app.post('/', function(request, response){
 	console.log(request.body);
    console.log(request.body.name);
    console.log(request.body.email);

});