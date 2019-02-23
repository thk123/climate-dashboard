/** require dependencies */
const express = require("express")
const routes = require('./routes/')
const cors = require('cors')
const path = require('path');

const app = express()
const router = express.Router()

let port = process.env.PORT || 4999

const react_build_root = '../build'

/** set up routes {API Endpoints} */
routes(router)

app.use(cors())
app.use('/api', router)

app.use(express.static(path.join(__dirname, react_build_root)));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, react_build_root, 'index.html'));
});



/** start server */
app.listen(port, () => {
    console.log(`API Server started at port: ${port}`);
    console.log(`HTML Server started at port: ${port}`);
});