const { default: mongoose } = require("mongoose");
require('dotenv').config();



const URL = process.env.MONGO_URL;


mongoose.connect(URL).then(()=>{
      console.log("Database connected");
      
}).catch((err)=>{
    console.log("Database Connection Error:",err.message);
    
})