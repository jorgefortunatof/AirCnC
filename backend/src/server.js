const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

const socketio = require('socket.io')
const http = require('http')

const app = express()
const server = http.Server(app)
const io = socketio(server)

const connectedUsers = {}

io.on('connection', socket => {
    const { user_id } = socket.handshake.query
    connectedUsers[user_id] = socket.id
})

//Atribui algumas variaves ao req para podermos acessar pelos controllers
//next -> serve para que continue o fluxo
app.use((req, res, next) => {
    req.io = io
    req.connectedUsers = connectedUsers
    return next()
})

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-rzpdi.mongodb.net/semana09?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.catch( err => console.log(err))

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'upload')))
app.use(routes)

server.listen(8085)
