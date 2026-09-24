const fs= require('fs')
const routeLoggerMiddleware =(req,res,next)=>{
     req.time = new Date(Date.now()).toString();
    let str=`
        Method=${req.method}
        Hostname=${req.hostname}
        Path=${req.path}
        Time=${req.time}
    `;
    fs.appendFileSync("./log/routeslog.txt",str);

    next();

} 

module.exports=routeLoggerMiddleware;