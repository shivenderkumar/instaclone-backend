const express = require('express');
const port = 8080;
const mongoose = require('mongoose');

const app = express();

app.get("/", (req,res)=>{
    res.end("Welcome to instaclone backend");
})

app.listen(port, ()=> console.log(`Server started listening on port ${port}`))
module.exports =app;