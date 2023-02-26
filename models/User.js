const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userId:{type:String, required:true},
    name:{type:String, required:true},
    profileImage:{type:String, required:false},
    role:{type:String, required:true},
    bio:{type:String, required:false},
    website:{type:String, required:false},
    github:{type:String, required:false},
    twitter:{type:String, required:false},
    facebook:{type:String, required:false},
    behance:{type:String, required:false},
    linkedIn:{type:String, required:false},
    instagram:{type:String, required:false}
})

module.exports = mongoose.model("User",schema);