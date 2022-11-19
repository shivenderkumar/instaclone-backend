const mongoose = require('mongoose');
const Schema = mongoose.Schema

const postSchema = new Schema({
    name : {type: String},
    location : {type: String},
    likes : {type: Number},
    description :{type: String},
    imageurl : {type: String},
    date : {type : String}
});

const postModel =  mongoose.model("post",postSchema);
module.exports = postModel;
