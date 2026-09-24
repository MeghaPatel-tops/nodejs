const express = require('express');
const { getCategory } = require('../Controller/CategoryController');

const Router = express.Router();

Router.get('/category',(req,res)=>{
        getCategory(req,res,(data)=>{
            res.json(data)
        },(err)=>{
            res.json(err);
        })
})

module.exports = Router;