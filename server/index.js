const express = require('express')
const app = express();

const PORT = 4000;

// Connect to DB
const db = require('./src/config/db');
db.connect();

//cors
var cors = require('cors');
app.use(cors());

//router
const route = require('./src/routes')
route(app)
app.listen(PORT,()=>{console.log('server is running')})
