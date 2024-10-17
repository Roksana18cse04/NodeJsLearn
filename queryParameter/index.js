const express = require("express");

const app =express();
const PORT = 3001;

const bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get("/register",(req,res)=>{

    res.sendFile(__dirname + "/register.html");

});

app.post("/register", (req,res)=>{
    const Name = req.body.name;
    const Email = req.body.email;
    const Password = req.body.password;
   
    res.send(`<h2>Your Name is ${Name} and Email is ${Email}</h2>`);

})


app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);

} );