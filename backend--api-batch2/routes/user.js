const express = require("express");
var router = express.Router();
var users = []
var userType="admin"

router.use(function(req,res,next){
    if(req.method==="DELETE" && userType==="admin"){
        res.send("you dont have enough permission to delete a user")
    }
    next();
})

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