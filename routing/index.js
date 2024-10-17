const http = require('http');
const fs = require("fs");
const PORT = 5010;
const hostName = '127.0.0.1';


const server = http.createServer((req,res) =>{

    const handleReadFile = (StatusCode,FileLocation) =>{
        fs.readFile(FileLocation, (err, data) => {
            res.writeHead(StatusCode,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    if(req.url ==="/"){
        handleReadFile(200,"./views/index.html");
    }else if(req.url ==="/about"){
        handleReadFile(200,"./views/about.html");

    }else if(req.url ==="/contact"){
        handleReadFile(200,"./views/contact.html");

    }else{
        handleReadFile(404,"./views/Error.html");

    }
});

server.listen(PORT,hostName, () => {
    console.log(`server running at http://${hostName}:${PORT}`);
});