const {todoModel}=require("../models/todoModels");


const getData= async (request,response)=>{
    console.log("Started")
    const todos= await todoModel.fond();
    console.log("end",todos)
    response.send(todos);
    
}

module.exports={
    getData,
};

