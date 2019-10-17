const express = require('express')
const app = express()
require('./server/db')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

require('./routes/main.routes')(app)

port = process.env.PORT
app.listen(port, () => {
    console.log(`App listening on port ${process.env.PORT}`)
})

