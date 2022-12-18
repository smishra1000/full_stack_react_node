const express = require("express");
const bodyParser = require("body-parser")
//const cors = require("cors");
var app = express();
//const router = express.Router();
var port = 5000

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:3000")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE")
    res.header("Access-Control-Allow-Headers","Origin,Content-Range, 'X-Content-Range,,Content-Type,Accept")
    next();

})

//app.use(cors())
var users = require('./routes/users')
var employee  = require("./routes/employee")


var jsonParser = bodyParser.json()
app.use(bodyParser.json({ type: 'application/*+json' }))


app.use("/users",jsonParser,users)
//app.use("/employee",employee)

app.listen(port,function(){
    console.log(`server is running on ${port}`)
})


