const express = require('express');
const mongoose = require('mongoose');
const postRouter = require('./routes/post');
const dotenv = require('dotenv');
const cors = require('cors'); //middleware
const cloudinary = {v2} = require('cloudinary');

dotenv.config();
const port = process.env.PORT;
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/instaclone");
app.use(cors()); 
app.use("/api/v1/posts", postRouter)


app.get("/", async (req, res) => {
    //create some default records in db from statis data
    // try{
    //     const mongoRes = await postModel.create(posts)
    //     console.log(mongoRes);
    //     if(mongoRes.length > 0){
    //         res.end("Mongo default res entered successfullt");        
    //     }
    //     else{
            res.end("Welcome to instaclone backend");
    //     }
    // }catch(err){
    //     res.end("error : ",err);
    // }
});

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_CLOUD,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.listen(port, () => console.log(`Server started listening on port ${port}`))
module.exports = app;