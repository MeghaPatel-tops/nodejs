const express = require('express');

const app = express();
const cors = require('cors');
const { Server } = require("socket.io");


const  http = require('http');

const server = http.createServer(app);
app.use(cors({
    origin: "http://127.0.0.1:5500"
}));

const io = new Server(server, {
    cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"]
    }
});






io.on('connection',(socket)=>{
    console.log("connection created");
    socket.emit('connection','Connecttion created from server')

    socket.on('sendMsg',(msg)=>{
        console.log(msg)
          socket.emit('revMsg',msg)
    })
})

server.listen(3000,()=>{
    console.log('app running on  http://localhost:3000/')
})