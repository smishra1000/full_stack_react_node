var express = require("express");

var Employee = require("../models/employee")
var router = express.Router()


router.post("/create",function(req,res){
    console.log(req.body)
    const employee = new Employee({
        name:req.body.name,
        age:req.body.age,
        phone:req.body.phone,
        company:req.body.company
    })
    employee.save().then(function(data){
        console.log("employee created succesfully")
        res.send("employee ctreated successfulyy")
    }).catch(function(err){
        console.log(err)
    })
})


module.exports = router


