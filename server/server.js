const path = require('path');
const express = require( 'express');
const http = require('http');
const socketIO = require('socket.io');
 
const port = process.env.PORT || 3000;
 
const publicPath = path.join(__dirname, '../public');

console.log(__dirname + './../public');


const app = express();
var server = http.createServer(app);
var io =  socketIO(server);

io.on('connection', (socket) => {
    console.log('New User Connected');
});

app.use(express.static(publicPath));

app.get('/', (req, res) => {

});

server.listen(port, () => {
    console.log(`Server is started at ${port}`);
})