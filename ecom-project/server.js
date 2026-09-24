const express= require('express');
 require('dotenv').config()
const adminroutes = require('./Routes/adminroutes.js')
require('./Db/db.js');


const app = express();
const port = process.env.PORT;
app.use('/api/',adminroutes);


app.get('/',(req,res)=>{
     res.send("Welcome to app")
})

app.listen(port,()=>{
    console.log(`Ecom App running on http://localhost:${port}/`);
    
})


