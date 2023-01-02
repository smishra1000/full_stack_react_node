const mongoose = require("mongoose")
var Schema = mongoose.Schema

var EmployeeSchema = new Schema({
    name:{type:String},
    age: {type:String},
    phone:{type:String},
    company:{type:String}

})

module.exports = mongoose.model('Employee',EmployeeSchema)