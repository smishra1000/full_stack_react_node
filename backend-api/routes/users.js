var express = require("express");
var router = express.Router()

var users = [
    {
        id:1,
        name:"sameer",
        age:30,
        phone:"11111"
    }

]

router.get("/",function(req,res){
    res.send(users)
})


router.post("/create",function(req,res){
    console.log(req.body)
    const {name,age,phone,id} = req.body
    users.push({name,age,phone,id})
    res.send("user save successfully")
})

router.delete("/:id/delete",function(req,res){
    let filteredUsers = users.filter(function(item){
        return item.id!==Number(req.params.id)
    })
    console.log("after deleteion users=",filteredUsers.length)
    users = [...filteredUsers]
    console.log(users)
    res.send("deleted user successfully")


})

router.put("/:id/update",function(req,res){
    
})

//localhost:5000/users/${id}/delete

module.exports = router
//localhost:5000/users/

