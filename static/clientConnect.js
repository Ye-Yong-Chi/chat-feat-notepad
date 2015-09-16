var socket = io();
$(document).ready(function(){
	var name = prompt("input name","user1");
	socket.emit("add user",name); 
	socket.on('add user',function(data){
		$('#messages').append($('<li>').text(data.username+"已上線"));
	});
	socket.on('user left',function(data){
		$('#messages').append($('<li>').text(data.username+"已離開"));
	});

	$('#send').click(function(){
		var text = $('#m').val();
		socket.emit('chat message', text);
		$('#m').val('');
	});
	$("#m").keydown(function(event){
		if ( event.which == 13 ){
			$('#send').click();
		}
	});

	socket.on('chat message', function(data){
		$('#messages').append($('<li>').text(data.username+":"+data.msg));
	});
});