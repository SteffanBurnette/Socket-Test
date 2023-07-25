const express = require('express');
const app = express(); // Create the Express application.
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;
//const app = express(); // Create the Express application.

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
 
  


io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

/**
 * 
 * 
app.get("/sock", (req, res)=>{
    try{
    console.log("Your Work");
    } catch(e){
        console.log(e.response.status);

    }

    
});
 */