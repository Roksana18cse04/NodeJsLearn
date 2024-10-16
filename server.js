const http =require("http");

const port =3000;
const hostname = '127.0.0.01';

const myServer = http.createServer((req,res) =>{
    res.end("hello I am your first server");
});

myServer.listen(port, () =>{
    console.log(`server is running successfully at  http://${hostname}:${port}`);

});
