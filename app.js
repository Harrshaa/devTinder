const express = require("express");
const app = express(); // creating the server

app.use("/",(req,res)=>{
    console.log(req.query);
    res.send("Hello from the dashboard");
});

app.use("/hello",(req,res)=>{
    res.send("Hello Hello Hello");
});
app.listen(3000,()=>{
    console.log("Server is listening on port 3000 .... ")
});