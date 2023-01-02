var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// create schema
var EmployeeSchema = new Schema({
    name :{type:String},
    email: {type:String},
    address: {type:String},
})

// create model from schema

module.exports = mongoose.model("Employee",EmployeeSchema)