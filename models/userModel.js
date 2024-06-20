const mongoose = require('mongoose')
const userModel  = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})
const users = mongoose.model('signup',userModel)

module.exports =users