const { default: mongoose } = require("mongoose");

const UserModel = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pwd:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    }

})

const User = mongoose.model('users',UserModel);
module.exports= User