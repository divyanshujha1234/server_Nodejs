// ctrl+c for killing the serever
const http= require("http");
const fs=require("fs");
const url=require("url"); //in dependencies (npm install url)

function handler(req,res)
{
    if(req.url==="/favicon.ico")
        return res.end();
    const log= `${Date.now()}: ${req.method} ${req.url} New request Recieved\n`;
    const myUrl= url.parse(req.url,true); //parse query string 
    //console.log(myUrl);
    fs.appendFile('log.txt', log, (err,data)=>{
       const username=myUrl.query.myname;
       switch(myUrl.pathname)
       {
          case "/":
            res.end("homepage");
            break;
          case "/about":
            res.end(`hi ${username}`);
            break;
          case "/signup":
            if(req.method === "GET")
                res.end("This is the sign up form");
            else if(req.method==="POST")
            {
                //DB quries
                res.end("Success");
            }
          default:
            res.end("default case");

       }

        
    });

}
const myServer= http.createServer(handler)  //request and response

myServer.listen(8000, () => console.log("Server started!"));  //port number .

// ***HTTP METHODS-***
// GET- WHEN YOU WANT TO GET SOME DATA FROM THE SERVER 
// POST- WHEN YOU WANT TO SEND AND MUTATE SOME DATA IN SERVER 
// PUT- TO PUTTING SOME DATA LIKE PHOTO OR PUTTING RESUME 
// PATCH- TO CHANGE ANY DATA 
// DELETE- TO DELETE


// Now, mainting the code for http request and respnse is getting complicated. 
// So to counter this we have a nodejs framework EXPRESS.JS (npm install express)
 