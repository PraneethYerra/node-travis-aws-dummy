const express = require("express");

const app =  express();

const port = process.env.PORT ||8000;

app.get("/",(req,res)=>{
    res.json({
        meta:{
            author:"praneeth",
            message:"you did it man!!!!!!"
        }
    })
});

app.listen(port,()=>console.log("Server runnning successfully on port number "+port));

module.exports = app;