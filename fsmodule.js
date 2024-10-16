const fs = require('fs');
//console.log(fs);
fs.unlink('demo1.txt',function(err){
    if(err) {
        console.log(err);
    }else{
        console.log(successfully);
    }
})