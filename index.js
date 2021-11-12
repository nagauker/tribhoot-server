require('dotenv')
const express = require('express');

// const ws = require('ws');
const management = require('./handler/management')


const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:3000']
  }
});

app.use(express.json())

app.use('/', (req,res) => {
  res.send("im on")
})
app.use('/management',management)

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('bla')
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(8000, () => {
  console.log('listening on *:8000');
});
// const wsServer = new ws.Server({ noServer: true });
// wsServer.on('connection', socket => {
//   socket.on('message', message => console.log(message));
// });

// const client = new ws('ws://localhost:3000');

// client.on('open', () => {
//   // Causes the server to print "Hello"
//   client.send('Hello');
// });

// const server = app.listen(8000);
// server.on('upgrade', (request, socket, head) => {
//   wsServer.handleUpgrade(request, socket, head, socket => {
//     wsServer.emit('connection', socket, request);
//   });
// });