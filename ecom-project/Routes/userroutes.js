const express = require('express');
const { reg } = require('../Controller/UserController');
const Router = express.Router();
const multer = require('multer');
const upload = multer();

Router.post("/registration",upload.none(),(req,res)=>{
         console.log(req.body)
        reg(req,res,(data)=>{
             res.status(200).json({msg:'User Created',data:data});
        },(err)=>{
            res.status(500).json(err)
        })
})

module.exports= Router