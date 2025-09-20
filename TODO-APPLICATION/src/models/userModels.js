const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    
    createdAt:{
        type:Date,
        
    },
    updatedAt:{
        type:Date,
    },

},
{timestamps:true}
);
export const userModel=mongoose.model("User",userSchema);