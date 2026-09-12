
import fs from 'fs'
import fspromises  from 'fs/promises' 

fs.readFile('hello.txt','utf8',(err,data)=>{
    if(err){
        console.log("file error:",err);

    }
    console.log("reading data fromn file:",data);
    
})
console.log("first");


//=============================================
function readFileHello (){
   try {
     const dataFile = fs.readFileSync('hello.txt','utf8');
     console.log("sync data:",dataFile);
     
   } catch (error) {
      console.log(error);
      
   }
}
readFileHello();

async function readHelloFileAsync(){
      try {
          let data = await fspromises.readFile('hello.txt','utf-8');
          console.log(data);
          
      } catch (error) {
          console.log(error);
          
      }
}
console.log("second");
readHelloFileAsync();


//=======read data in chuck


function readDatainChuck(){
    const stream = fs.createReadStream('users.json',{encoding:'utf8'});

    stream.on('data',(chunk)=>{
        console.log("chunk=",chunk);
        
    })
    stream.on('end', () => console.log('Finished reading file'));
stream.on('error', (err) => console.error('Stream error:', err));

}

readDatainChuck();