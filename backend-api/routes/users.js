var express = require("express");
var router = express.Router()

var users = [

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
    console.log(req.params.id)
    let filteredUsers = users.filter(function(item){
        return Number(item.id)!==Number(req.params.id)
    })
    console.log("after deleteion users=",filteredUsers.length)
    users = [...filteredUsers]
    console.log(users)
    res.send("deleted user successfully")


})

router.put("/:id/update",function(req,res){
    for(i=0;i<users.length;i++){
        if(users[i].id===Number(req.params.id)) {
            users[i].age = req.body.age;
            users[i].name=req.body.name;
            users[i].phone = req.body.phone;
            users[i].id = req.body.id
        }
    }
    res.send("user updated successfully")
})

//localhost:5000/users/${id}/delete

module.exports = router
//localhost:5000/users/

