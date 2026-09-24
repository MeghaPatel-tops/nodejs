const express = require('express');
require('dotenv').config();

const app = express();
const userroutes = require('./Routes/user.js')
const adminroutes = require('./Routes/admin.js')
const todoroutes = require('./Routes/todo.js');
const routeLoggerMiddleware= require('./Middleware/RouteLog.js')
app.use(express.json())

app.use(routeLoggerMiddleware);
app.use('/',userroutes);
app.use('/admin/',adminroutes);
app.use('/todo/',todoroutes)




app.get('/about',(req,res)=>{
    res.send("about page");
})

app.listen(3000,()=>{
    console.log(`app running on http://localhost:3000/`);
    
})