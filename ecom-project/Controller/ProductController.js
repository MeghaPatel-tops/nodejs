
const Product = require('../Model/ProductModel.js')
const { ObjectId } = require('mongodb');

 const createProduct = async(req,res,cb,err)=>{
     try {
        const product={
                productname:req.body.productname,
                price:req.body.price,
                description:req.body.description,
                pimage:`http://localhost:3000/images/Product/${req.file.filename}`,
                catid:req.body.catid
        }
        const result = await Product.insertOne(product);
        cb(result);
     } catch (error) {
        err(error.message)
     }
}

const deleteProducts = async(req,res,cb,err)=>{
    try {
        const id = req.params.id;
        const result = await Product.deleteOne({_id:new ObjectId(id)});
        cb(result)
    } catch (error) {
        err(error.message)
    }
}

const getProducts = async(req,res,cb,err)=>{
    try {
        const result = await Product.find().populate('catid');
        cb(result)
    } catch (error) {
        err(error.message)
    }
}

const getProductById = async(req,res,cb,err)=>{
    try {
        const result = await Product.findById(req.params.id);
        cb(result);
    } catch (error) {
        err(error.message)
    }
}

const updateProduct = async(req,res,cb,err)=>{
    try {
        const id= req.params.id;
        const product={
                productname:req.body.productname,
                price:req.body.price,
                description:req.body.description,
                pimage:`http://localhost:3000/images/Product/${req.file.filename}`,
                catid:req.body.catid
        }
        const result = await Product.updateOne({_id:new ObjectId(id)},product);
        cb(result)
    } catch (error) {
        err(error.message)
    }
}

module.exports = {createProduct,deleteProducts,getProducts,getProductById,updateProduct}