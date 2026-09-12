import http, { createServer } from 'http'
const port=5000;
import gallery from './gallarydata.js';

const server = createServer((req,res)=>{
    let str = {
        MEthod:req.method,
        url:req.url,
        Headers:req.headers
    }
    if(req.url==="/"){
        res.writeHead(200,{
            "content-type":'application/json'
        })
        res.end(JSON.stringify(str))
    }
    else if(req.url==="/about"){
         res.end("About Page")
    }
    else if(req.url==="/gallary"){
         res.end(JSON.stringify(gallery))
    }
    else{
        res.end("404 Page Not Found")
    }
    
    res.end();
})

server.listen(port,()=>{
    console.log(`app running on http://localhost:${port}/`);
    
})