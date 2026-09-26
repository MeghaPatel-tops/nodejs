const Category = require("../Model/CategoryModel");
const { ObjectId } = require('mongodb');

const getCategory = async(req,res,cb,err)=>{
    try {
        const res = await Category.find();
        cb(res)
        
    } catch (error) {
        console.log(error);
        
        err({"Error":error.message})
    }
}

const getCategoryById = async(req,res,cb,err)=>{
    try {
        const id= req.params.id;
        const res = await Category.findOne({_id:new ObjectId(id)});
        cb(res)
        
    } catch (error) {
        console.log(error);
        
        err({"Error":error.message})
    }
}

const createCategory = async(req,res,data,err)=>{
    try {
        
        const res = await Category.insertOne({
            cname:req.body.cname,
            cimage:`http://localhost:3000/images/category/${req.file.filename}`

        })
        data(res)
    } catch (error) {
        err(error.message)
    }
}

const deleteCategory = async(req,res,data,err)=>{
     try {
        const id = req.params.id;
        const res = await Category.deleteOne({_id:new ObjectId(id)})
        console.log(res)
        data(res)
     } catch (error) {
        err(error.message)
     }
}


const updateCategory= async(req,res,cb,err)=>{
    try {
         const id = req.params.id;
         const res = await Category.updateOne({_id:new ObjectId(id)},{
            cname:req.body.cname,
            cimage:`http://localhost:3000/images/category/${req.file.filename}`

        })
         cb(res)
    } catch (error) {
        err(error.message)
    }
}
module.exports = {getCategory,createCategory,deleteCategory,getCategoryById,updateCategory}