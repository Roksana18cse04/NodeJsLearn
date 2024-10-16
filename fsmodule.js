const fs = require('fs');
//console.log(fs);
fs.appendFile('demo1.txt',"My Name Is Roksana Akter ",function(err){
    if(err) {
        console.log(err);
    }else{
        console.log("File created");
    }
})