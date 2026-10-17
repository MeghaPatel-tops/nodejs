const express = require('express');
const { reg,login, addToCart, viewCart, updateCart, deleteCart, createOrder } = require('../Controller/UserController');
const Router = express.Router();
const multer = require('multer');
const upload = multer();
const Auth = require('../Middleware/Auth.js')

Router.post("/registration",upload.none(),(req,res)=>{
         console.log(req.body)
        reg(req,res,(data)=>{
             res.status(200).json({msg:'User Created',data:data});
        },(err)=>{
            res.status(500).json(err)
        })
})

Router.post("/login",upload.none(),(req,res)=>{
        login(req,res,(data)=>{
            res.status(200).json(data);
        },(err)=>{
            res.status(200).json(err)
        })
})

Router.get("/product", Auth,(req,res)=>{
      res.status(200).json(`YOU passed Middlwraew ${req.UserId}`)
})

// Router.post('/addtocart',upload.none(),Auth,(req,res)=>{
//     console.log(req.body)
//     //  addToCart(req,res,(data)=>{
//     //     res.status(200).json(data);
//     //  },(err)=>{
//     //     res.status(500).json(err)
//     //  })
// })

Router.post(
    '/addtocart',
    (req, res, next) => {
        console.log('1. Request received');
        next();
    },
    upload.none(),
    (req, res, next) => {
        console.log('2. Multer completed');
        console.log('Body:', req.body);
        next();
    },
    Auth,
    (req, res) => {
        console.log('3. Auth completed');
        console.log('User ID:', req.UserId);

        addToCart(req, res, (data) => {
            res.status(200).json(data);
        }, (err) => {
            res.status(500).json(err);
        });
    }
);

//========================View Cart
Router.get(
    '/mycart',
  
    Auth,
    (req, res) => {
        console.log('3. Auth completed');
        console.log('User ID:', req.UserId);

        viewCart(req,res,(data)=>{
            res.status(200).json(data);
        },(err)=>{
            res.status(500).json(err)
        })
    }
);
//=======================update cart
Router.post(
    '/updatecart',
    (req, res, next) => {
        console.log('1. Request received');
        next();
    },
    upload.none(),
    (req, res, next) => {
        console.log('2. Multer completed');
        console.log('Body:', req.body);
        next();
    },
    Auth,
    (req, res) => {
        
        updateCart(req, res, (data) => {
            res.status(200).json(data);
        }, (err) => {
            res.status(500).json(err);
        });
    }
);
//==========================delete cart
Router.delete(
    '/deletecart/:id',
    (req, res, next) => {
        console.log('1. Request received');
        next();
    },
  
    Auth,
    (req, res) => {
        
        deleteCart(req, res, (data) => {
            res.status(200).json(data);
        }, (err) => {
            res.status(500).json(err);
        });
    }
);
//==========================Order Genrate
Router.post(
    '/order-gen',
    (req, res, next) => {
        console.log('1. Request received');
        next();
    },
    upload.none(),
    (req, res, next) => {
        console.log('2. Multer completed');
        console.log('Body:', req.body);
        next();
    },
    Auth,
    (req, res) => {
        console.log(req.body)
        createOrder(req, res, (data) => {
            
            res.status(200).json(data);
        }, (err) => {
            res.status(500).json(err);
        });
    }
);



module.exports= Router