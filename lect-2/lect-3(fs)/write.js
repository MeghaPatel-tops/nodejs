import { error } from 'console';
import fs from 'fs'
import fsPromises from 'fs/promises';

fs.writeFile('product.txt',"Welocme to app",(err,data)=>{
    if(err){
        console.log( error);
        
    }
    console.log("file created");
    
})
console.log("after file created log");

function writeDataIntoProduct(){
    try {
         const data = fs.writeFileSync('product.txt',"product file created",'utf8');
         console.log("file created synch way");
         
    } catch (error) {
        console.log(error);
        
    }

}
writeDataIntoProduct();


async function WriteFilePromises(){
    try {
        let res = await fsPromises.writeFile('product.txt',"product deleted successfully");
        console.log("promises fy done");
        
    } catch (error) {
        console.log(error);
        
    }
}

WriteFilePromises();