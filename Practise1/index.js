const express=require('express');
app = express();


app.get("/", function (req, res){
    res.send("Hello Express js");
});

app.listen(8000,function (){
    console.log('server is running on port 8000');
});