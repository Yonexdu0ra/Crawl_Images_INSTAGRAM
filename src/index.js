require('dotenv').config()
const routes = require('./routes')
const { engine } = require('express-handlebars');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000
const { createServer } = require("http");
const server = createServer(app);
const WebSocket = require("ws")
const wss = new WebSocket.WebSocketServer({ server })
// config
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.engine('.hbs', engine({ extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'views'));

wss.on('connection', (ws) => {
    
})
routes(app)

server.listen(PORT, () => {
    console.log(`server runing on: http://localhost:${PORT}`, process.env.USERNAME)
})