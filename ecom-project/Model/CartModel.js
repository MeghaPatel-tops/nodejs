const { default: mongoose } = require("mongoose");
const Product = require("../Model/ProductModel.js")
const CartModel = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        reuired:true
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    qty:{
        type:Number,
        default:1
    }
})

const Cart = mongoose.model('cart',CartModel);
module.exports = Cart;