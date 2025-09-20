const dummymiddleware=(request,response)=>{
    console.log("Middleware is running");
    next();
}
module.exports={dummymiddleware};