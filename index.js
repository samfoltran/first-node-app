const express = require('express')
const app = express()
const port = 5000;

// App Routes
app.use('/', require('./routes/routes.js'))

app.listen(port, () => {
    console.log(`Serveing on port ${port}`)
})