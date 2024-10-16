//os,path
/*
const os =require('os');
console.log(os.userInfo());
console.log(os.totalmem());
console.log(os.freemem());
*/
//console.log(__dirname); //current directory show
//console.log(__filename);
const path =require("path");
const extensionName = path.extname("index.js");
console.log(extensionName);

const joinName = path.join(__dirname + "/views");
console.log(joinName);