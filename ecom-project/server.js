const express= require('express');
 require('dotenv').config()
const adminroutes = require('./Routes/adminroutes.js')
const userRoutes = require('./Routes/userroutes.js')
require('./Db/db.js');


const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const port = process.env.PORT;
app.use('/api/',adminroutes);
app.use('/',userRoutes);


app.get('/',(req,res)=>{
     res.send("Welcome to app")
})

app.listen(port,()=>{
    console.log(`Ecom App running on http://localhost:${port}/`);
    
})


