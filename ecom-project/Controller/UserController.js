const { CreateHAsPwd } = require("../Utils/comman")
const User = require('../Model/UserModel.js')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Cart = require("../Model/CartModel.js");
const env= require('dotenv').config();
const { ObjectId } = require('mongodb');
const Razorpay = require("razorpay");
const Order = require('../Model/OrderModel.js')



const reg = async(req,res,cb,err)=>{
    try {
      
        const hasPass = await CreateHAsPwd(req.body.pwd);
        const userData = {
            username:req.body.username,
            email:req.body.email,
            contact:req.body.contact,
            pwd:hasPass
        }
        const result = await User.insertOne(userData);
        cb(result)
    } catch (error) {
        err(error.message)
    }
}

const login = async(req,res,cb,err)=>{
    try {
       const privateKey = process.env.PRIVATE_KEY;
        let user = await User.findOne({email:req.body.email});
        let userPwd = req.body.pwd;
        if(user){
           
             const passwordsMatch = bcrypt.compareSync(userPwd, user.pwd);
             console.log(passwordsMatch);
             if(passwordsMatch){
                   const token = jwt.sign({uid:user._id},privateKey,{ expiresIn: '1h' });
                   cb({'message':"Login successfully",token:token,user:user})
             }
             else{
                throw new Error("Credential not Matched");
             }

        }
        else{
             throw new Error("Invalid Email Id");
        }
    } catch (error) {
        err(error.message)
    }
}


const addToCart= async(req,res,cb,err)=>{
    try {
        const result = await Cart.insertOne({
            userId:req.UserId,
            productId:req.body.productId,

        })
        if(result){
            cb({messgae:"Product AddedTo Cart"});
        }
    } catch (error) {
        err(error.message)
    }
}

const viewCart = async(req,res,cb,err)=>{
    try {
        const result = await Cart.find({userId:req.UserId,});
        cb(result)
    } catch (error) {
        err(error.message)
    }
}

const updateCart = async(req,res,cb,err)=>{
    try {
        const result = await Cart.updateOne({_id:new ObjectId(req.body.id)},{qty:req.body.qty});
        cb({msg:"Cart Updated"})
    } catch (error) {
        err(error.message)
    }
}

const deleteCart = async(req,res,cb,err)=>{
    try {
        const result = await Cart.deleteOne({_id:new ObjectId(req.params.id)});
        cb({msg:"Cart Deleted"})
    } catch (error) {
        err(error.message)
    }
}
  const razorpay = new   Razorpay({
            key_id:process.env.RAZORKEY,
            key_secret:process.env.RAZORSECRET,
        })
const createOrder = async(req,res,cb,err)=>{
    try {
      

        const orderGen = await razorpay.orders.create({
            amount:req.body.amount,
             currency: "INR",
            receipt: "receipt_" + Date.now()
        })

        

        orderGen.userId=req.userId;
        const respo =await Order.insertOne({
            orderID:orderGen.id,
            ordercurrency:orderGen.currency,
            amount:orderGen.amount,
            userId:req.userID}
        );
        console.log(respo)


        cb(respo)
    } catch (error) {
        console.log(error)
        err(error.message)
    }
}


module.exports = {reg,login,addToCart,viewCart,updateCart,deleteCart,createOrder    }