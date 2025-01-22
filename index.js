// ctrl+c for killing the serever
const http= require("http");
const fs=require("fs");
const myServer= http.createServer((req,res)=> {  //request and response
    const log= `${Date.now()}: New rquest Recieved\n`;
    
    fs.appendFile('log.txt', log, (err,data)=>{

        res.end("hello from server");
    });

});

myServer.listen(8000, () => console.log("Server started!"));  //port number 
 