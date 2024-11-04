const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.route");

const app = express();


app.use(cors());
app.use(express.urlencoded({extended :true}));
app.use(express.json());
app.use("/api/users",userRouter);


// api/users : GET ----> all user return
// api/users/:id :GET ---> specific user return
// api/users/ : POST ---> new user create
// api/users/:id : PATCH ---> update user
// api/users/:id : DELETE ---> delete user





app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/./views/index.html");
});

//error handling
app.use((req,res,next)=>{
    res.status(404).json({
        message : "Route Not Found",
    });
});

//server handling
app.use((err,req,res,next)=>{
    res.status(500).json({
        message : "something broke ",
    });
});
    
module.exports = app;