const Account = require('../models/account');
const Post = require('../models/post');

require('dotenv').config();
const uploads = require('../middleware/multer').uploads;
const cloudinary = require('cloudinary').v2.uploader;
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

const postNewPost = async (req, res, next) => {
    console.log(`Posting new post for account`);

    const post = new Post(req.body);
    console.log(post);
    post.author = req.params.accountId;
    const image = dUri.format(path.extname(req.file.originalname), req.file.buffer).content;

    try {
        const img = await cloudinary.upload(image);
        post.imgUrl = img.url;
        const postData = await post.save();
        await Account.findByIdAndUpdate(req.params.accountId, { $push: { "posts": postData._id} });
        res.json(postData);
    } catch (error) {
        next(error);
    }
    
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

const deleteSinglePost = async (req, res, next) => {

    try {
        const post = await Post.findByIdAndDelete(req.params.postId);

        //hacky solution; extract the unique id of image from the url.
            //it is always the very last bit of the url.
        const imgUniqueId = post.imgUrl.match(/\/(?<id>\w+)(\.png|\.jpg)$/).groups.id;
        await cloudinary.destroy(imgUniqueId);
        await Account.findByIdAndUpdate(req.params.accountId, { $pull: { "posts": post._id} });
        res.json(post);

    } catch(error) {
        next(error);
    }
};

module.exports = {
    "getAll": getAllPosts,
    "post": [uploads, postNewPost],
    "getSingle": getSinglePost,
    "patchSingle": patchSinglePost,
    "deleteSingle": deleteSinglePost
};