const express = require('express')
const cookieParser = require('cookie-parser')


const logger = require('./logger')

const dotenv = require('dotenv')
dotenv.config()

const app = express()
module.exports = app

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

module.exports = io
const cors = require('cors');

corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions))
app.use('/static', express.static('public'))

app.use(express.urlencoded())

app.use(express.json())

app.use(cookieParser())

app.use(logger)

io.on('connection', (socket) => {
    console.log('connection established');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

});

// mini apps
const userRouter = require('./routers/user.router')
const publicRouter = require('./routers/public.router')

// base routes
app.use('/', publicRouter)
app.use('/user', userRouter)    // base route - '/user'

app.use((req, res)=>{
    res.status(404).send({
        message: '404 url not found'
    })
})

const port = process.env.PORT || 3000
const host = '0.0.0.0'

// running the server
server.listen(port, host, ()=>{
    console.log(`[+] server running on http://${host}:${port}`)
})
