import express from 'express';
import {
    WebSocketServer
} from "ws";
import http from 'http';
import fs from 'fs';

const app = express();
const server = http.createServer(app);
const wssPort = 8080;
const wss = new WebSocketServer({
    port: wssPort
});

wss.on("connection", (ws, request, client) => {
    console.log("New client connection from IP: ", ws._socket.remoteAddress);
    console.log("Number of connected clients: ", wss.clients.size);

    ws.on('message', function message(data) {
        console.log('received: %s', data);
        ws.send("Thank you for you message!");
    });

    // close event
    ws.on("close", () => {
        console.log("Client disconnected");
        console.log(
            "Number of remaining connected clients: ",
            wss.clients.size
        );
    });

    ws.send(`Hello there ${client}`);
})

app.get('/killers', (req, res) => { //Line 9
    fs.readFileSync('killers.json');
    res.json( 'Hello World' ); //Line 10
    });

const port = 2999;
server.listen(port, () => {
    console.log(`Http Server started on port http://localhost:${port}`)
    console.log(`WebSocket Server started on port ws://localhost:${wssPort}`)
})