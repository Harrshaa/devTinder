const express = require("express");
const app = express(); // creating the server

app.get("/user",(req,res,next)=>{
    console.log("Handling the route user !!!");
    next();
})
app.get("/user",(req,res,next)=>{
    res.send("Response Hanlder 2")

})


app.listen(3000,()=>{
    console.log("Server is listening on port 3000 .... ")
});