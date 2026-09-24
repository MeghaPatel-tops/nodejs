const getCategory = async(req,res,cb,err)=>{
    try {
        
        cb(['Electronics','cloths']);
    } catch (error) {
        console.log(error);
        
        err({"Error":error.message})
    }
}

module.exports = {getCategory}