const fs = require('fs');
//console.log(fs);
fs.writeFile('demo1.txt',"This is sample  text ",function(err){
    if(err) {
        console.log(err);
    }else{
        console.log("File created");
    }
})