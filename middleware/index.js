const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.static("public"));
app.get("/",(re,res)=>{
    res.sendFile(__dirname+"/index.html"); 
});


/*
const myMiddleWare = (req,res,next)=>{

    console.log("Middleware function");

    req.currentTime = new Date(Date.now());

    next();

};

app.use(myMiddleWare);

app.get("/",myMiddleWare,(req,res)=>{
    console.log("I am route "+req.currentTime);
    res.send("Hello World");

});



*/
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});