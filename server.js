const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')

const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080

//MIDDLEWARE
app.use(morgan('dev'))
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

// DB CONNECTION 



// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'))
// }

app.use('/', require('./routes'))

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})