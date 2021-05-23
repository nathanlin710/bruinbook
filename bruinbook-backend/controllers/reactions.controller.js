const Reaction = require('../models/reaction');
const Post = require('../models/post');

const getReactions = (req, res, next) => {
    Post.findById(req.params.postId)
        .populate('reactions')
        .then(post => res.json(post.reactions))
        .catch(error => next(error));
};

const postReaction = async (req, res, next) => {
    const reaction = new Reaction(req.body);
    reaction.post = req.params.postId;
    try {
        const reactionData = await reaction.save();
        await Post.findByIdAndUpdate(req.params.postId, { $push : { "reactions" : reactionData._id }});
        res.json(reactionData);
    } catch(error) {
        next(error);
    }
};

const getReaction = (req, res, next) => {
    Post.findById(req.params.postId)
        .populate({
            path: 'reactions',
            match: { author: { $eq: req.params.reactionAccountId}}
        })
        .then(post => {
            if (post.reactions.length == 0) {
                res.json({ 
                    "reactionType": -1
                });
            } else {
                res.json(post.reactions[0]);
            }
        })
        .catch(error => next(error));
};

const deleteReaction = async (req, res, next) => {
    try {
        const reactionData = await Reaction.findByIdAndDelete(req.params.reactionId);
        await Post.findByIdAndUpdate(req.params.postId, { $pull : { "reactions" : reactionData._id}});
        res.json(reactionData);
    } catch(error) {
        next(error);
    }
};

module.exports = {
    "getReactions" : getReactions,
    "postReaction" : postReaction,
    "getReaction" : getReaction,
    "deleteReaction" : deleteReaction
}