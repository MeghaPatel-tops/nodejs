const { CreateHAsPwd } = require("../Utils/comman")
const User = require('../Model/UserModel.js')

const reg = async(req,res,cb,err)=>{
    try {
      
        const hasPass = await CreateHAsPwd(req.body.pwd);
        const userData = {
            username:req.body.username,
            email:req.body.email,
            contact:req.body.contact,
            pwd:hasPass
        }
        const result = await User.insertOne(userData);
        cb(result)
    } catch (error) {
        err(error.message)
    }
}

module.exports = {reg}