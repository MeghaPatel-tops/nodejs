const express = require('express');
const router = express.Router();

router.get('/dashbord',(req,res)=>{
    res.send("Admin dashbord");
})

// router.get('/product/:id',(req,res)=>{
//     //res.send(`url:${req.url}`);
//     //res.send(`query params:${req.params.id}`)
//     res.send(`query params:${req.query}`)
// })


router.get('/product/',(req,res)=>{
    //res.send(`url:${req.url}`);
    //res.send(`query params:${req.params.id}`)
    res.send(`query params:${req.query.pname}`)
})

module.exports=router