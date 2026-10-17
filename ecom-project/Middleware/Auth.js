const jwt = require('jsonwebtoken')
const env= require('dotenv').config();
const Auth = async(req,res,next)=>{
    try {
        const privateKey = process.env.PRIVATE_KEY;
        const Header = req.headers.authorization;
        const Token = Header.split(" ")[1];
       
        const decoded = jwt.verify(Token,privateKey)
        if(decoded){
            req.UserId= decoded.uid
            next();
        }

    } catch (error) {
        res.status(404).json("Unauthorized User")
    }
}

module.exports= Auth;