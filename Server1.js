const http =require("http");

const port =3032;
const hostname = '127.0.0.01';

const myServer = http.createServer((req,res) =>{
    //res.writeHead(202,{'Content-Type':'text/plain'});
    res.writeHead(202,{'Content-Type':'text/html'});
    res.write('<h1>Hello World\n</h1>');
    res.end();
});

myServer.listen(port, () =>{
    console.log(`server is running successfully at  http://${hostname}:${port}`);

});
