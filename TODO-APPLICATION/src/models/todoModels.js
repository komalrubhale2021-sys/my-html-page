//const mongoose=require("mongoose");
import mongoose from "mongoose";
const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true,
    },
    description:{
        type:String,
        unique:true,
        required:true,
    },
    isCompleted:{
        type:String,
        default:false,
        
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

},
{timestamps:true}
);
export const todoModel=mongoose.model("Todo",todoSchema);