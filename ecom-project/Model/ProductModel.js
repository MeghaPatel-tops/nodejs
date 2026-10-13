const { default: mongoose } = require("mongoose");

const ProductModel = new mongoose.Schema({
    productname:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        required:true,
    },
    description:
    {
        type:String,
        required:true
    },
    pimage:{
        type:String,
        required:true
    },
    catid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true
    }
})

const Product = mongoose.model("product",ProductModel);
module.exports =Product