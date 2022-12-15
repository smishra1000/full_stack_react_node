const express = require("express");

var app = express();


app.get("/",function(req,res){
    res.send("hello from express js")
})

app.get("/student",function(req,res){
    res.send("<html><body><h1>hello from student</h1></body></html>")
})

app.get("/user",function(req,res){
    res.send({id:1,name:"sameer"})
})

app.listen(5000,function(){
    console.log("server started at 5000")
})


