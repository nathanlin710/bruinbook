const Account = require('../models/account');
const Post = require('../models/post');

require('dotenv').config();
const uploads = require('../middleware/multer').uploads;
const uploader = require('cloudinary').v2.uploader;
const dataUri = require('datauri/parser');
const path = require('path');



const dUri = new dataUri(); 


const getAllPosts = (req, res, next) => {
    console.log(`Getting all posts for account`);
    Account.findById(req.params.accountId)
        .populate('posts')
        .then(data => res.json(data.posts))
        .catch(error => next(error));
};

const postNewPost = (req, res, next) => {
    console.log(`Posting new post for account`);

    const post = new Post(req.body);
    console.log(post);
    post.author = req.params.accountId;
    const image = dUri.format(path.extname(req.file.originalname), req.file.buffer).content;

    uploader.upload(image)
        .then((img) => { post.imgUrl = img.url})
        .then(() => post.save())
        .then(data => Account.findByIdAndUpdate(req.params.accountId, { $push: { "posts": data._id} }))
        .then(data => res.json(data))
        .catch(error => next(error));
    
};

const getSinglePost = (req, res, next) => {
    console.log(`Getting single Post`);
    Post.findById(req.params.postId)
        .then(data => res.json(data))
        .catch(error => next(error));

};

const patchSinglePost = (req, res, next) => {
    console.log("Updating single Post");
    Post.findByIdAndUpdate(req.params.postId, req.body, { new: true })
        .then(data => res.json(data))
        .catch(error => next(error));
};

const deleteSinglePost = (req, res, next) => {
    Post.findByIdAndDelete(req.params.postId)
        .then(data => res.json(data))
        .catch(error => next(error));
};

module.exports = {
    "getAll": getAllPosts,
    "post": [uploads, postNewPost],
    "getSingle": getSinglePost,
    "patchSingle": patchSinglePost,
    "deleteSingle": deleteSinglePost
};