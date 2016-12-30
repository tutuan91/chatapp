var socket = io();
socket.on('connect', function(){
  console.log('connect to server');
  socket.emit('createMessage', {
    from: 'Tuan',
    text:'Yup'
  });
});
socket.on('disconnect', function(){
  console.log('disconnect to server');
});

socket.on('newMessage', function(message){
  console.log('newMessage', message);
});
