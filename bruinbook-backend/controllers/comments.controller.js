const Comment = require('../models/comment');
const Post = require('../models/post');

const getComments = (req, res, next) => {
    Post.findById(req.params.postId)
        .populate('comments')
        .then(post => res.json(post.comments))
        .catch(error => next(error));
};

const postComment = async (req, res, next) => {
    const comment = new Comment(req.body);
    comment.post = req.params.postId;
    try {
        const commentData = await comment.save();
        await Post.findByIdAndUpdate(req.params.postId, { $push : { "comments" : commentData._id }});
        res.json(commentData);
    } catch(error) {
        next(error);
    }
};

const getComment = (req, res, next) => {
    Comment.findById(req.params.commentId)
        .then(comment => res.json(comment))
        .catch(error => next(error));
};

const deleteComment = async (req, res, next) => {
    try {
        const commentData = await Comment.findByIdAndDelete(req.params.commentId);
        Post.findByIdAndUpdate(req.params.postId, { $pull : { "comments" : commentData._id}});
        res.json(commentData);
    } catch(error) {
        next(error);
    }
};

module.exports = {
    "getComments" : getComments,
    "postComment" : postComment,
    "getComment" : getComment,
    "deleteComment" : deleteComment
}

