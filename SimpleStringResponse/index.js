const express=require('express');
app = express();

// simple string response
app.get("/one", function (req, res){
    res.send("simple string response");
});

app.post("/two", function (req, res){
    res.send("simple string response");
});

app.get("/three", function (req, res){
    res.status(401);
    res.end("Unauthorise");
});
app.listen(8000,function (){
    console.log('server is running on port 8000');
});