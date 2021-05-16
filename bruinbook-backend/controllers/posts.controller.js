const Account = require('../models/account');
const Post = require('../models/post');

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
    post.author = req.params.accountId;
    post.save()
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
    "post": postNewPost,
    "getSingle": getSinglePost,
    "patchSingle": patchSinglePost,
    "deleteSingle": deleteSinglePost
};