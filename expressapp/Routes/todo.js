const express = require('express');
const connectDB = require('../Db/connection');
const { ObjectId } = require('mongodb');
const { default: axios } = require('axios');
// const { default: connectDB } = require('../Db/connection');

const Router = express.Router();

Router.post('/create/',async(req,res)=>{
       try {
           const db = await connectDB();
           const collection = db.collection('todoapp');
           const response = await collection.insertOne(req.body);
          return  res.status(200).json(response);
       } catch (error) {
        console.log(error);
        
           return res.status(500).json(error);
       }
})

Router.get('/',async(req,res)=>{
        try {
           const db = await connectDB();
           const collection = db.collection('todoapp');
           const request =  await collection.find().toArray();
            return res.status(200).json(request)
           

        } catch (error) {
             return res.status(500).json(error)
             
        }
})

Router.get('/:id',async(req,res)=>{
        try {
           const id = req.params.id;
           console.log(id);
           
           const db = await connectDB();
           const collection = db.collection('todoapp');
           const request =  await collection.findOne({_id:new ObjectId(id)});
            return res.status(200).json(request)
           

        } catch (error) {
                console.log(error);
                
             return res.status(500).json(error)
             
        }
})

Router.delete('/:id',async(req,res)=>{
        try {
           const id = req.params.id;
           console.log(id);
           
           const db = await connectDB();
           const collection = db.collection('todoapp');
           //const doc =  await collection.findOne({_id:new ObjectId(id)});
           const request = await collection.deleteOne({_id:new ObjectId(id)})
           return res.status(200).json(request)
           

        } catch (error) {
                console.log(error);
                
             return res.status(500).json(error)
             
        }
})

Router.put('/:id',async(req,res)=>{
        try {
           const id = req.params.id;
           console.log(id);
           
           const db = await connectDB();
           const collection = db.collection('todoapp');
           const request = await collection.updateOne({_id:new ObjectId(id)},{$set:req.body})
           return res.status(200).json(request)
           

        } catch (error) {
                console.log(error);
                
             return res.status(500).json(error)
             
        }
})


Router.get('/wdata/:city',async(req,res)=>{
    try {
        const city = req.params.city;
        const request = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city},IN&limit=1&appid=04efb7796586439b09f90f8ca239e2de`);
        
        const lon=request.data[0].lon;
        const lat=request.data[0].lat;
        console.log(lon);
        
        const req1= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=04efb7796586439b09f90f8ca239e2de`)
        return res.json(req1.data)
    } catch (error) {
        return res.json(error)
    }

})

module.exports = Router