const { v4: uuidv4 } = require("uuid");
const router = require("../routes/user.route");
const User = require("../models/user.model");
//create anew user
const createUser = async (req,res)=>{
    try{
        const userID =uuidv4();
        console.log("Generated user id : ",userID);
        const newUser = new User({
            id: userID, 
            name:req.body.name,
            age:Number(req.body.age)
        });
        await newUser.save();
        res.status(201).json(newUser);

    }catch(error){
        res.status(500).send(error.message);
    }
};

const getAllUser = async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);    
    }catch(error){
        res.status(500).json(error.message);
    }
};

const getOneUser = async (req,res)=>{
    try{
        const user = await User.findOne({id: req.params.id}) ;
        if(!user){
            res.status(404).json({message: "User not found"});
        }

        res.status(200).json(user);

    }catch(error){
        res.status(500).json(error.message);
    }
};

// Update a user by ID
const updateUser  = async (req, res) => {
    try{
        const user = await User.findOne({id: req.params.id}) ;
        user.name=req.body.name;
        user.age=Number(req.body.name);
        await user.save();
        res.status(201).json(user);

    }catch(error){
        res.status(500).send(error.message);
    }
};

// Delete a user by ID
const deleteUser  = async (req, res) => {
    try {
        await User.findOneAndDelete({ id: req.params.id });
        res.status(200).json({ message: "User  deleted successfully" });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = { getAllUser , getOneUser , createUser , updateUser , deleteUser  };