import mongoose from "mongoose";
const roleSchema=new mongoose.Schema({
    role:{
        type: String,
        enum: ['Admin', 'User'],
    }
});

const Role=mongoose.model('Role',roleSchema);
module.exports=Role;