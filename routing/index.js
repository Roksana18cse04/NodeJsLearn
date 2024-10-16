const http = require('http');

const PORT = 3001;
const hostName = '127.0.0.01';


const server = http.createServer((req,res) =>{
    res.end("welcome to server");
});

server.listen(PORT,hostName, () =>{
    console.log(`server running at http://${hostName}:${PORT}`);
});