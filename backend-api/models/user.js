const mongoose = require("mongoose")
var Schema = mongoose.Schema

var UserSchema = new Schema({
    name:{type:String},
    age: {type:String},
    phone:{type:String}

})

module.exports = mongoose.model('User',UserSchema)