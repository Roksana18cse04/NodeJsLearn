const router = require("../routes/user.route");

const getAllUser = (req,res)=>{
    res.status(200).json({
        message:"All users",
    });
};

const getOneUser = (req,res)=>{
    res.status(200).json({
        message:"get One User",
    });
};

const createUser = (req,res)=>{
    res.status(201).json({
        message:"All users",
    });
};
const updateUser = (req,res)=>{
    res.status(200).json({
        message:"update user",
    });
};
const deleteUser = (req,res)=>{
    res.status(200).json({
        message:"delete user",
    });
};


module.exports = {getAllUser,getOneUser,createUser,updateUser,deleteUser};