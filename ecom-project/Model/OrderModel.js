const { default: mongoose } = require("mongoose");

const orderModel = new mongoose.Schema({
    orderID:{
        type:String,
    }
    ,
    ordercurrency:{
        type:String
    },
    amount:{
        type:Number
    },
    userId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"users"
    }
});

const Order = new mongoose.model("orders",orderModel);
module.exports = Order
