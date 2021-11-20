require('dotenv').config()
const express = require('express');

const management = require('./handler/management')

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000'
  }
});
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json())


app.get('/', (req,res) => {
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
