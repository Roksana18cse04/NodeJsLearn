const  express = require('express');

app = express();

app.get('/',function (req,res){
    let FName=req.query.firstName;
    let LName=req.query.lastName;

    res.end(FName + " "+ LName);

});

app.listen(5000,function (){
    console.log('Server is running 8000');
});