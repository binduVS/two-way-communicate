var socket = io();   //establish a connection to the server
socket.on('connect',()=>{               //mostly a event listener. activates when it listens connect event
console.log('server is connected');
 
})
socket.on('newMessage',function(Message){
    console.log('you got a new Message',Message);
})

socket.on('disconnect',()=>{
    console.log('disconnected from server');
})