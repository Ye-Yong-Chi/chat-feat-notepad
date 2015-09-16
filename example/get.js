var express = require('express');
var app = require('express')();
var http = require('http').Server(app);


http.listen( 3000, function(){
	console.log('start NoteServer\n');
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/g.html');
});

app.get('/tt', function(req, res){
	console.log(req.query);
	console.log(req.query.name);
	console.log(req.query.email);
});

// 							GET											POST
// 網址差異		網址會帶有 HTML Form 表單的參數與資料。		資料傳遞時，網址並不會改變。
// 資料傳遞量		由於是透過 URL 帶資料，所以有長度限制。		由於不透過 URL 帶參數，所以不受限於 URL 長度限制。
// 安全性			表單參數與填寫內容可在 URL 看到。			透過 HTTP Request 方式，故參數與填寫內容不會顯示於 URL。
