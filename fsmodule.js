const fs = require('fs');
//console.log(fs);
fs.rename('demo1.txt','demo2.txt',function(err){
    if(err) {
        console.log(err);
    }else{
        console.log(successfully);
    }
})