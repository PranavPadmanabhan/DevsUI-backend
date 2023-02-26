const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    designId:{type:String, required:true},
    name:{type:String, required:true},
    description:{type:String, required:true},
    images:{type:[String], required:true},
    levels:{type:String, required:true},
    tools:{type:[String], required:true},
    creator:{type:String, required:true},
})

module.exports = mongoose.model("Designs",schema);