const fs = require('fs');
//console.log(fs);
fs.readFile('demo1.txt','utf-8',function(err,data){
    if(err) {
        console.log(err);
    }else{
        console.log(data);
    }
})