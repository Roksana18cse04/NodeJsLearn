const {default : mongoose} = require( "mongoose");

const userSchema = mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true

    },
    name:{
        type: String,
        required: true,

    },
    age:{
        type: Number,
        required:true,
    },
    createdOn:{
        type: Date,
        default: Date.now,
    }


});
const User = mongoose.model('User ', userSchema);

module.exports = mongoose.model("user",userSchema);