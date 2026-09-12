import fsPromises from 'fs/promises';
import fs from 'fs'
async function checkFileExit(){
    try {
        await fsPromises.access('hellowww.txt');
        console.log("file exists");
        
    } catch (error) {
        console.log("file not found");
        
    }
}
checkFileExit();

function deleteFile(){
    //  fs.unlink('product.text',(err)=>{
    //      if(err){
    //         console.log("file not delete :",err);
            
    //      }
    //      console.log("file Deleted");
         
    //  })
    fs.rename('hello.txt','new.txt',(err)=>{
         if(err){
            console.log("file not delete :",err);
            
         }
         console.log("file Deleted");
         
     })
}
deleteFile();