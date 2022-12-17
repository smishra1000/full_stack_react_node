const express = require("express");
const bodyParser = require("body-parser")
var app = express();
//const router = express.Router();
var port = 5000

var users = require('./routes/users')
var jsonParser = bodyParser.json()
app.use(bodyParser.json({ type: 'application/*+json' }))


app.use("/users",jsonParser,users)
app.use("/employee",employee)

app.listen(port,function(){
    console.log(`server is running on ${port}`)
})


