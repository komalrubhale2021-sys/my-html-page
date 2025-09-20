const bcrypt = require("bcrypt");
const saltRoundes = 10;
const registerUser = (request, response) => {
    const { username, email, password } = request.body;
    if (username.length < 8) {
        response.status(400).send("user name must be 8 characters");
        return;
    }
    const hashesdPassword = bcrypt.hash(myPlaintexPassword, saltRounds);
    console.log("hashed password:", hashesdPassword);
    const addedUsere = userModel.insertOne({+
        username,
        email, password: hashesdPassword,
    });

//console.log("this is thr request body:",request.body);
consolr.log("register controller exicuted");
response.send("user registered sucessfully");
};
module.exports = {
    registerUser,
}