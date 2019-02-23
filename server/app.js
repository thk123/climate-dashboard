/** require dependencies */
const express = require("express")
const routes = require('./routes/')
const cors = require('cors')
const path = require('path');

const app = express()
const router = express.Router()

let port = process.env.PORT || 4999

/** set up routes {API Endpoints} */
routes(router)

app.use(cors())
app.use('/api', router)

app.use(express.static(path.join(__dirname, '../deploy-build')));

app.get('/', function(req, res) {
  console.log("Sending: ")
  res.sendFile(path.join(__dirname, '../deploy-build', 'index.html'));
});



/** start server */
app.listen(port, () => {
    console.log(`API Server started at port: ${port}`);
    console.log(`HTML Server started at port: ${port}`);
});