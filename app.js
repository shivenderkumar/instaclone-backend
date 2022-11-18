const express = require('express');
const port = 8080;

const mongoose = require('mongoose');
const postModel = require('./models/post');
mongoose.connect("mongodb://127.0.0.1:27017/instaclone")

const app = express();

//const tempImageUrl = "https://media.distractify.com/brand-img/wN0Hm22u0/0x0/watch-naruto-in-order-1598141302084.jpg"

// const posts = [
//     {
//         name: "Siva",
//         location: "Bengaluru",
//         likes: 64,
//         description: "Kick start your career",
//         imageurl: tempImageUrl,
//         date: new Date(),
//     },
//     {
//         name: "Neeraj",
//         location: "Pune",
//         likes: 30,
//         description: "Sample Description",
//         imageurl: tempImageUrl,
//         date: new Date(),
//     },
//     {
//         name: "Rahul",
//         location: "Hyderabad",
//         likes: 30,
//         description: "Sample Description for Post",
//         imageurl: tempImageUrl,
//         date: new Date(),
//     }
// ]


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
})

app.listen(port, () => console.log(`Server started listening on port ${port}`))
module.exports = app;