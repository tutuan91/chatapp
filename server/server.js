const path = require('path');
const http =  require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generatemessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 4000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));
io.on('connection', (socket) =>{
  console.log('new user connected');
  socket.emit('newMessage', generatemessage('Admin','Welcome to the chat app'));

  socket.broadcast.emit('newMessage',generatemessage('Admin', 'New user joined'));
  socket.on('createMessage', (message,callback)=>{
    console.log('createMessage',message);
    io.emit('newMessage',generatemessage (message.from, message.text));
    // socket.broadcast.emit('newMessage',{
    //   from: message.from,
    //   text: message.text,
    //   createAt: new Date().getTime()
    // });
    callback('This is from the server');
  });
  socket.on('createEmail',(newEmail)=>{
    console.log('CreateEmail', newEmail);
  });
  socket.on('disconnect',() =>{
  console.log('User was disconnected');
  });
});
server.listen(port,() =>{
  console.log(`server is up on ${port}`);
});
