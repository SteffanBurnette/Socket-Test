/*
  <body>
    <ul id="messages"></ul>
    <form id="form" action="">
      <input id="input" autocomplete="off" /><button>Send</button>
    </form>
    <script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io(); //Establishes server connection
  var form = document.getElementById('form'); //Gets the form document from the element with id-form
  var input = document.getElementById('input');//Gets the input elemnty from the input field where the elements id is 'input'

  //On submit the function executes
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) { //If input has a value the .emit event called chat message will trigger taking in the input fields data
      socket.emit('chat message', input.value);
      //Afterwords the field will be set back to empty
      input.value = '';
    }
  });

  //Catches the messages and displays them onto the server.
  socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });

*/

//OLD ARTICLE WAY
/**
 * 
 * //Sets express
const express = require('express');
//Runs app on express
const app = express();
//Sets server
const http = require('http');
//creates server
const server = http.createServer(app);
//Gets the server from the socket.io libary
const { Server } = require("socket.io");
//Uses that new server element to create a server variable and call it io
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });


  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        //In order to send an event to everyone, Socket.IO gives us the io.emit() method.
        //In this case, for the sake of simplicity we’ll 
        //send the message to everyone, including the sender.
      io.emit('chat message', msg);
    });
  });
/*
//Listens on the connection event for incoming sockets and log it to the console
//Connection is the the name given to the connection
//(socket) is the callback that will be executed once the connection is made
  io.on('connection', (socket) => {
    //When a user connects this code will be executed
    console.log('a user connected');


    //Prints out the users chat mesasages
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);  });

    //Each socket also fires a special disconnect event:
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });
//That’s all it takes to load the socket.io-client, which exposes an
// io global (and the endpoint GET /socket.io/socket.io.js), and then connect.

//Notice that I’m not specifying any URL when I call io(), 
//since it defaults to trying to connect to the host that serves the page.
*/

/*



//The port that the server is listening to
server.listen(3000, () => {
    console.log('listening on *:3000');
  });
  
  
  //If you want to send a message to everyone except for a 
  //certain emitting socket, we have the broadcast flag for emitting from that socket:
  /**
   * io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
  });
   
 */