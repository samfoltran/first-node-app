const express = require('express')
const app = express()

const paths = require('./paths')

// Sets the 'assets' directory
app.use(express.static('public'))

app.get('/secret', (req, res) => {
    res.sendFile(`${paths('templates')}/secret.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${paths('templates')}/home.html`)
})

// 404 Error
app.use(function(req, res, next){
    res.status(404).sendFile(`${paths('templates')}/404.html`)
})

module.exports = app