const express = require('express');
const router = express.Router();
require('dotenv').config();




router.get('/',(req,res)=>{
    res.send('user index page');
})

router.post('/create',(req,res)=>{
    // console.log("hello");
    
    // //console.log(req.headers);
    // console.log(req.url);
    // console.log(req.ip);
    // console.log(req.method);
    const Wkey = process.env.wKey;
    console.log(Wkey);
    
    res.status(200).json(req.body);

    
    
    
})

router.post('/wdata',(req,res)=>{
      console.log(req.body);
      res.send(req.body)
})

module.exports=router