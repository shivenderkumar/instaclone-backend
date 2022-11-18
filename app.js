const express = require('express');
const port = 8080;

const app = express();

app.get("/posts",(req,res)=>{
    try{
        //get all posts from mongodb
        const posts = []; //getAllPosts()
        res.status(200).json(posts);
    }catch(err){
        res.status(400).json(err)
    }
})

app.get("/", (req,res)=>{
    res.end("Welcome to instaclone backend");
})

app.listen(port, ()=> console.log(`Server started listening on port ${port}`))
module.exports =app;