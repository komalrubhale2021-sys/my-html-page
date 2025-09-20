const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require("./config/dbConnect");
const app = express();
const { getData } = require("./controllers/todoController");
const dotenv = require("dotenv");
const { registerUser } = require("./controllers/userController");
const { dummymiddleware } = require("./middleware/dummymiddleware")


// function getData(){

// }
dotenv.config();
app.use(bodyParser.urlencoded());
app.use(bodyUser.json());
app.use(dummymiddleware);
app.get("/todos", dummymiddleware,
    getData);
// a
app.post('/register', registerUser);
app.listen(3000, () => {
    //dbConnect.dbConnect();
    //console.log(dbconnect);
    console.log("Mongo URL:", process.env.MONGO_DB_URL);
    console.log("server started at localhost 3000");
})