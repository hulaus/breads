const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})

app.get('/', (req,res) => {
    res.send('Welcome to an Awesome App about Breads')
})

const breadsController = require('./controllers/bread_controller.js')
app.use('/breads',breadsController)