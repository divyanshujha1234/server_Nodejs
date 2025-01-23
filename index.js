// ctrl+c for killing the serever
 const http= require("http");
// const fs=require("fs");
// const url=require("url"); //in dependencies (npm install url)
const express= require("express");

const app= express();  // this app is like a handler function (we have all the methods) 

app.get("/", (req,res)=> {
     return res.send("hello from homepage");
});
// app.HTTP_METHOD(path,handler);
   // app is instance of express
   //path on the server
   //handeler is executed when route is matched 
app.get("/about", (req,res)=>{
   return res.send("hello from about page");
});
// function handler(req,res)
// {
//     if(req.url==="/favicon.ico")
//         return res.end();
//     const log= `${Date.now()}: ${req.method} ${req.url} New request Recieved\n`;
//     const myUrl= url.parse(req.url,true); //parse query string 
//     //console.log(myUrl);
//     fs.appendFile('log.txt', log, (err,data)=>{
//        const username=myUrl.query.myname;
//        switch(myUrl.pathname)
//        {
//           case "/":
//             res.end("homepage");
//             break;
//           case "/about":
//             res.end(`hi ${username}`);
//             break;
//           case "/signup":
//             if(req.method === "GET")
//                 res.end("This is the sign up form");
//             else if(req.method==="POST")
//             {
//                 //DB quries
//                 res.end("Success");
//             }
//           default:
//             res.end("default case");

//        }

        
//     });

// }
// const myServer= http.createServer(app);  //request and response

// myServer.listen(8000, () => console.log("Server started!"));  //port number .

app.listen(8000,()=> console.log("Server Started!"));

// ***HTTP METHODS-***
// GET- WHEN YOU WANT TO GET SOME DATA FROM THE SERVER 
// POST- WHEN YOU WANT TO SEND AND MUTATE SOME DATA IN SERVER 
// PUT- TO PUTTING SOME DATA LIKE PHOTO OR PUTTING RESUME 
// PATCH- TO CHANGE ANY DATA 
// DELETE- TO DELETE


// Now, mainting the code for http request and respnse is getting complicated. 
// So to counter this we have a nodejs framework EXPRESS.JS (npm install express)
// we don't evem need to import the http to run the server in express
 