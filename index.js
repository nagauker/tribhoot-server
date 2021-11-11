const webSocketServer = require('websocket').server;
const http = require("http")
const websocketServerPort = 8000;

const server = http.createServer();


server.listen(websocketServerPort)
console.log(`Listen on port ${websocketServerPort}`);

const wsServer = new webSocketServer({
    httpServer: server
})

const clients = {};

wsServer.on('request', (request) => {
    const connection = request.accept(null, request.origin);

    connection.on('message', (message) => {
        console.log(message);
        connection.sendUTF(message.utf8Data)
    })
})



// const express = require('express')
// const app = express()
// const port = 2000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })