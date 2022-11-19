const express = require('express');
const bodyParser = require('body-parser');
const postModel = require('../models/post');
const router = express.Router();

const multer = require('multer')
const storage = multer.diskStorage({
    destination (req, file, cb) {
        cb(null, 'uploads/images');
    },
    filename (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload =  multer({storage})

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}));

router.get("/", async (req,res)=>{
    try{
        console.log("api called - get posts");
        const posts = await postModel.find()
        res.status(200).json({
            status: "success",
            data : posts
        });
    }catch(err){
        res.status(400).json({error : err.message})
    }
});

router.post("/add", upload.single('postimage') ,async (req,res)=>{
    try{
        console.log("api called - get posts");
        console.log(req.file);
        console.log(req.body);
        //create post obj from req body

        //add that obj in mongodb
        // const mongoRes = await postModel.create(post)
        // //get res from mongodb and send that res
        // res.status(200).json({
        //     status: "success",
        //     data : mongoRes
        // });
        res.json({name: "ko"})

    }catch(err){
        res.status(400).json({error : err.message})
    }
});

module.exports = router;