import mongoose from "mongoose";
//const mongoose = require("mongoose");
const dbConnect=async()=>{
    try{

    
    console.log("connection started");
    const connection =await mongoose.connect("process.env.MONGO_DB_URL");
    console.log("connected sucScessfully!");
    console.log("connection");
    }catch{
        console.log("Database connection failed:",error);
        process.exit(1);
    }
};
export {
    dbConnect
};