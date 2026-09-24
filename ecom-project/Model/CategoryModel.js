const { default: mongoose } = require("mongoose");

const CategorySchema = new mongoose.Schema({
    "cname":{
        type:String,
        require:true
    },
    "cimage":{
        type:String,
        require:true
    }
})

const Category = mongoose.model('category',CategorySchema);
module.exports = Category