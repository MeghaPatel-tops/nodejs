const express = require('express');
const { getCategory, createCategory, deleteCategory, getCategoryById, updateCategory } = require('../Controller/CategoryController');
const multer = require('multer');
const path = require('path');
const { createProduct, deleteProducts, getProducts,getProductById, updateProduct } = require('../Controller/ProductController');

const Router = express.Router();

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/images/category");
    },
    filename:function(req,file,cb){
         cb(null, Date.now() + path.extname(file.originalname));
    }
});

const storageProduct = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/images/Product");
    },
    filename:function(req,file,cb){
         cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage:storage})
const productUpload= multer({storage:storageProduct})

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

Router.post('/product/create',productUpload.single('pimage'),(req,res)=>{
        createProduct(req,res,(data)=>{
            res.status(200).json(data)
        },(err)=>{
            res.status(500).json(err)
        })
})

Router.delete('/product/:id',(req,res)=>{
        deleteProducts(req,res,(data)=>{
            res.status(200).json(data)
        },(err)=>{
            res.status(500).json(err)
        })
})

Router.get('/product',(req,res)=>{
    getProducts(req,res,(data)=>{
        res.status(200).json(data)
    },(err)=>{
        res.status(500).json(err)
    })
})
Router.get('/product/:id',(req,res)=>{
     getProductById(req,res,(data)=>{
        res.status(200).json(data)
     },(err)=>{
        res.status(500).json(err);
     })
})

Router.put('/product/:id',productUpload.single('pimage'),(req,res)=>{
    updateProduct(req,res,(data)=>{
        res.status(200).json(data)
    },(err)=>{
        res.status(500).json(err)
    })
})

module.exports = Router;