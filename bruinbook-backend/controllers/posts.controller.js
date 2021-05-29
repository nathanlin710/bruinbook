const Account = require('../models/account');
const Post = require('../models/post');

require('dotenv').config();
const uploads = require('../middleware/multer').uploads;
const cloudinary = require('cloudinary').v2.uploader;
const dataUri = require('datauri/parser');
const path = require('path');

const dUri = new dataUri(); 

const getAllPosts = async (req, res, next) => {

    populationObject = [{ path: 'author', select: 'username'}, 
                     { path: 'comments', populate : { path: 'author', select: 'username' } },
                     { path: 'reactions', populate: {path: 'author', select: 'username'} } ];

    try {
        let posts;
        if (req.query.hasOwnProperty('keyword')) {
            posts = await Post.find({ 'content': { "$regex": req.query.keyword, "$options": "i"}})
                .populate(populationObject);
        } else {
            posts = await Post.find().populate(populationObject);
        }

        posts.forEach(post => {
            post.comments.sort((c1, c2) => {
                return Date.parse(c1.createdAt) - Date.parse(c2.createdAt);
            })
        });

        posts.sort((p1, p2) => {
            return Date.parse(p2.createdAt) - Date.parse(p1.createdAt);
        });        

        res.json(posts);
    } catch(error) {
        next(error);
    }
};

const getAllPostsOfAccount = (req, res, next) => {
    console.log(`Getting all Posts for Account`);
    Account.findById(req.params.accountId)
        .populate('posts')
        .then(data => res.json(data.posts))
        .catch(error => next(error));
};

const postNewPost = async (req, res, next) => {
    console.log(`Posting new Post for Account`);

    const post = new Post(req.body);
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
        .populate('author', 'username')
        .populate({
            path: 'comments',
            populate: { path: 'author', select: 'username'}
        })
        .populate({
            path: 'reactions',
            populate: { path: 'author', select: 'username'}
        })
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
        const imgUniqueId = post.imgUniqueId;
        await cloudinary.destroy(imgUniqueId);
        await Account.findByIdAndUpdate(req.params.accountId, { $pull: { "posts": post._id} });
        res.json(post);

    } catch(error) {
        next(error);
    }
};

module.exports = {
    "getAll": getAllPosts,
    "getAllPostOfAccount": getAllPostsOfAccount,
    "post": [uploads, postNewPost],
    "getSingle": getSinglePost,
    "patchSingle": patchSinglePost,
    "deleteSingle": deleteSinglePost
};