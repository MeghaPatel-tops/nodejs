const express = require('express');
const { getCategory, createCategory, deleteCategory, getCategoryById, updateCategory } = require('../Controller/CategoryController');
const multer = require('multer');
const path = require('path');

const Router = express.Router();

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/images/category");
    },
    filename:function(req,file,cb){
         cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage:storage})

Router.get('/category',(req,res)=>{
        getCategory(req,res,(data)=>{
            res.json(data)
        },(err)=>{
            res.json(err);
        })
})

Router.post('/category/create',upload.single('cimage'),(req,res)=>{
        createCategory(req,res,(data)=>{
            res.status(200).json({msg:"Data created",data:data});
        },(err)=>{
            res.status(500).json(err);
        })
        
})

Router.delete('/Category/:id',(req,res)=>{
      deleteCategory(req,res,(data)=>{
          res.status(200).json(data);
      },(err)=>{
          res.status(500).json(err)
      })
})

Router.get('/Category/:id',(req,res)=>{
      getCategoryById(req,res,(data)=>{
          res.status(200).json(data);
      },(err)=>{
          res.status(500).json(err)
      })
})

Router.put('/Category/:id',upload.single('cimage'),(req,res)=>{
      updateCategory(req,res,(data)=>{
          res.status(200).json(data);
      },(err)=>{
          res.status(500).json(err)
      })
})

module.exports = Router;