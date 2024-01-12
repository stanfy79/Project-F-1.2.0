//Include the necessary extensions

const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();

//encode url
app.use(bodyparser.urlencoded({extended: true}));

//connecting to mongoDB
mongoose.connect("mongodb+srv://stanfy79:pro123456@cluster0.nnapghi.mongodb.net/Projext_F", { useNewUrlParser: true }, { useUnifiedTopology: true });

// Create data Schema
const regSchema = {
    User: String,
    Password: String
}

const Reg = mongoose.model("logins", regSchema);

//To present the html page
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/main.html");
})

//Send data to mongoDB
app.post("/", function(req, res) {
    let newReg = new Reg({
        User: req.body.User,
        Password: req.body.Password
    });
    newReg.save();
    //Remain on thesame page after submition
    res.redirect("/");
})

// To listen on PORT 3000

app.listen(3000, function() {
    console.log("Listening on 3000");
})