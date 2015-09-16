function connect(io){
	io.on('connection', function(socket){
		socket.on('add user',function(msg){ 
			socket.username = msg;
			io.emit('add user',{ 
				username: socket.username
			});
		});
		socket.on('disconnect',function(){
			io.emit('user left',{
				username:socket.username
			});
		});
		socket.on('chat message', function(msg){
			io.emit('chat message', {
				username:socket.username,
				msg:msg
			});
		});
	});
};


module.exports=connect;

