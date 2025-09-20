// import express from "express";
const express = require('express');
const app=express();
app.get('/products',(request,response)=>{
    console.log("get executed");
    response.send("I got a products")
})
app.get('/helper',(request,response)=>{
    console.log("get executed");
    response.send("I got a helper")
})
app.listen(3000,()=>{
    console.log("server started at post 3000")
});