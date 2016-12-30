const path = require('path');
const http =  require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8080;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));
io.on('connection', (socket) =>{
  console.log('new user connected');
  socket.emit('newMessage', {
    from: 'tuanfdsfsda',
    text: 'see you again',
    createAt:12212321
  });
  socket.on('createMessage', (message)=>{
    console.log('createMessage',message);
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
