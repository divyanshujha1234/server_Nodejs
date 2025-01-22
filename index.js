// ctrl+c for killing the serever
const http= require("http");
const fs=require("fs");
const url=require("url"); //in dependencies (npm install url)
const myServer= http.createServer((req,res)=> {  //request and response
    if(req.url==="/favicon.ico")
        return res.end();
    const log= `${Date.now()}: ${req.url} New rquest Recieved\n`;
    const myUrl= url.parse(req.url,true); //parse query string 
    console.log(myUrl);
    fs.appendFile('log.txt', log, (err,data)=>{
        
       switch(myUrl.pathname)
       {
          case "/":
            res.end("homepage");
            break;
          case "/about":
            res.end("about page");
            break;
          default:
            res.end("default case");

       }

        
    });

});

myServer.listen(8000, () => console.log("Server started!"));  //port number .
 