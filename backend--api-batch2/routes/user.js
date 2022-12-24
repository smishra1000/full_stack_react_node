const express = require("express");
var router = express.Router();
var users = []

router.get("/",function(req,res){
   res.send(users);
})

router.post("/create",function(req,res){
    console.log("data inside post request are",req.body)
    const {id,name,age} = req.body
    users.push({id,name,age})
    res.send("user created successfully")
})

router.delete("/delete",function(req,res){
    res.send("delete routes working")
})

router.put("/update",function(req,res){
    console.log("data recieved from cleint=",req.body)
    res.send("hello from put routes")
})


module.exports = router