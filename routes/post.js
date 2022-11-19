const express = require('express');
const bodyParser = require('body-parser');
const postModel = require('../models/post');
const {UploadApiResponse,v2 } = require('cloudinary');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({})
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
        if(!req.file){
            return res.status(400).json({
                status: "failed",
                message : "please select file"
            })
        }
//        console.log(req.file);

        let uploadedFile = UploadApiResponse;
        try{
            uploadedFile = await v2.uploader.upload(req.file.path, {
                folder: "instaclone",
                resource_type: "auto"
            });

        }catch(err){
            console.log("error in loading file to cloudinary :",err);
        }
//        console.log("loaded file to cloudinary URL is :",uploadedFile.url);
        //create post obj from req body
        const post = {
            ...req.body,
            imageurl: uploadedFile.url
        }
        console.log(post);
        //add that obj in mongodb
        const mongoRes= await postModel.create(post);
        // //get res from mongodb and send that res
        res.status(200).json({
            status: "success",
            data : mongoRes
        });

    }catch(err){
        res.status(400).json({error : err.message})
    }
});

module.exports = router;