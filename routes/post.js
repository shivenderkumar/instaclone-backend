const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

router.use(bodyParser.json)
router.use(bodyParser.urlencoded({extended: false}));

router.get("/posts",(req,res)=>{
    try{
        //get all posts from mongodb
        const posts = []; //getAllPosts()
        res.status(200).json(posts);
    }catch(err){
        res.status(400).json({error : err.message})
    }
});

router.post("/posts/add",(req,res)=>{
    try{
        console.log(req.body);
        //create post obj from req body
        //add that obj in mongodb
        //get res from mongodb
        //send that res
    }catch(err){
        res.status(400).json({error : err.message})
    }
});

module.exports = router;