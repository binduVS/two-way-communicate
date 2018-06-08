const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;
publicPath = path.join(__dirname,'../public');
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));
io.on('connection',(socket)=>{
 console.log('new user is connected')
 socket.on('disconnect',()=>{
    console.log('disconnected from server');
})
})
server.listen(port,()=>{
    console.log(`listening to port `);
})
