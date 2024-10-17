const express=require('express');
app = express();

// simple string response
app.get("/one", function (req, res){
    res.send("simple string response");
});

app.post("/two", function (req, res){
    res.send("simple string response");
});
// response status
app.get("/three", function (req, res){
    res.status(401);
    res.end("Unauthorise");
});

//Json Response

app.get("/four", function (req, res){
    let myJsonArray =[
        {
            name: "Roksana",
            City: "Dhaka",
            age :  24,
            Occupation:"Student"
        },
        {
            name: "Reshma",
            City: "Comilla",
            age : 25,
            Occupation:"Teacher"

        }

    ]
    res.json(myJsonArray);
});

 //download Response
app.get("/five", function (req, res){
    res.download("./uploads/Roksana.png");
});

//redirect response

app.get("/bangladesh", function (req, res){
    res.redirect("http://localhost:8000/usa");
    
});
app.get("/usa", function (req, res){
    res.send("this is india")
    res.redirect("/bangladesh");
});

//response header

app.get("/six", function (req, res){
    res.append("name","Roksana");
    res.append("age","24");
    res.append("city","Dhaka");
    res.send("Hello");
    res.status(201,"my world");
});

//cookies set
app.get("/seven", function (req, res){
    res.cookie("name","Roksana");
    res.cookie("age","24");
    res.cookie("city","Dhaka");
    res.end("Cookies sent success");
});


//cookies clear

app.get("/eight",function (req,res){
    res.clearCookie('name');
    res.clearCookie('age');
    
    res.end("clear cookie");
});
app.listen(8000,function (){
    console.log('server is running on port 8000');
});