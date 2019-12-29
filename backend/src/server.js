const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-rzpdi.mongodb.net/semana09?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.catch( err => console.log(err))

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'upload')))
app.use(routes)

app.listen(8085)
