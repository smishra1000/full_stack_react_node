const express = require("express");
var bodyParser = require("body-parser")

var cors = require("cors");
const app =express();
var userRoutes = require("./routes/user")
app.use(cors())
var jsonParser = bodyParser.json();
app.use("/user",jsonParser,userRoutes)

app.listen(7000,function(){
    console.log("server started");
})
