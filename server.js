var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var connect=require('./library/connect');
var txt=require("./library/txtNote");


http.listen( 3000, function(){
	console.log('start NoteServer\n');
});



app.use('/static', express.static( __dirname + '/static')); //static file


connect(io);

// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/static/index.html');
// });


// http://localhost:3000/note?name=test.txt
// var txt=require("./library/txtNote");
app.get('/', function(req, res){

	var path = "./note/"+req.query.name;
	var noteName=req.query.name;
	txt.read(res,path,noteName);
});

app.post('/save/:name', function(req, res){
	var path = "./note/"+req.params.name;
	var noteName=req.params.name;
	txt.save(req,res,path,noteName);
});

