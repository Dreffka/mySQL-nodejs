const express = require('express')
const bodyParser = require('body-parser')



const app = express()

const PORT = process.env.PORT || 3000


// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))




app.get('/', (req, res) => {
    res.send('Server started')
})

require("./app/routes/user.routes.js")(app)
require("./app/routes/card.routes.js")(app)
require("./app/routes/set.routes.js")(app)
require("./app/routes/chat.routes.js")(app)
require("./app/routes/lots.routes.js")(app)
require("./app/routes/transaction.routes.js")(app)


app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})