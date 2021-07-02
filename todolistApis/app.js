var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");

var app = express();

var port = 3000;

mongoose.connect("mongodb://localhost:27017/todolist");

mongoose.connection.on("connected",()=>{
    console.log("i am connected to database");
});

app.use(cors());

app.use(bodyparser.json());

//get, post, put, delete, method, options, etc.


// Curd C = creat, U = update, R = read, D = delete

app.use("/tasks",require("./routes/tasks"))

app.get("/",(req,res)=>{
    console.log("someone have made get call");
    res.send("welcome to todo list");
})

app.listen(port,()=>{
    console.log("i am running on port :: ",port);

})