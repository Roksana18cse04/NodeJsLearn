const express =require("express");
const bodyParser = require("body-parser");
const app=express();
const PORT=process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});
app.get('/circle',(req,res)=>{
    res.sendFile(__dirname + "/Circle.html");
});
app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname + "/Triangle.html");
});
app.get('/temperature',(req,res)=>{
    res.sendFile(__dirname + "/temperature.html");
});
app.get('/quadrilateral',(req,res)=>{
    res.sendFile(__dirname + "/quadrilateral.html");
});

app.post('/circle',(req,res)=>{
    let radius=req.body.radius;
    let area=Math.PI*radius*radius;
    res.send(`<h2> Area of circle is ${area}</h2>`);


});


app.listen(PORT,()=>{
    console.log(`server is running  at http://127.0.0.1:${PORT}`);
});


