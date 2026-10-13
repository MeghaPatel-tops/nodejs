const bcrypt = require('bcryptjs');
const CreateHAsPwd = async(pwd)=>{
       try {
        const salt = await bcrypt.genSalt(10);
        const hPwd = await bcrypt.hash(pwd, salt);

        console.log(hPwd);
        return hPwd;
    } catch (error) {
        throw new Error('Cannot encrypt password');
    }
    
}
module.exports ={CreateHAsPwd}