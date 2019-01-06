/** require dependencies */
const express = require("express")
const routes = require('./routes/')
const cors = require('cors')

const app = express()
const router = express.Router()

let port = 5000 || process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

app.use(cors())
app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`API Server started at port: ${port}`);
});