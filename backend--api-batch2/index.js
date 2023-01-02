const express = require("express");
var bodyParser = require("body-parser")

var cors = require("cors");
const app =express();
var userRoutes = require("./routes/user")
app.use(cors())
var jsonParser = bodyParser.json();

// app.use(function(req,res,next){
//     console.log("calling middle ware")
//     res.send("you dont have acces to this api")
//     next();
// })

app.use("/user",jsonParser,userRoutes)

app.listen(7000,function(){
    console.log("server started");
})
