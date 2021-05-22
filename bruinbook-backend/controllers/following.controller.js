const Account = require('../models/account');

const getAllFollowing = (req, res, next) => {
    Account.findById(req.params.accountId)
        .populate('following')
        .then(data => res.status(200).json(data.following))
        .catch(error => next(error));
};

const followAccount = async (req, res, next) => {
    Account.findByIdAndUpdate(req.params.accountId, { $addToSet : { following : req.params.followId}}, {new : true})
        .then(data => res.status(200).json(data))
        .catch(error => next(error));
};

const unfollowAccount = async (req, res, next) => {
    Account.findByIdAndUpdate(req.params.accountId, { $pull : { following : req.params.followId}}, {new: true})
        .then(data => res.status(200).json(data))
        .catch(error => next(error));
};

const isFollowing = (req, res, next) => {
    Account.findById(req.params.accountId)
        .then(data => {
            if (data.following.includes(req.params.followId)) {
                res.json({ "isFollowing" : true });
            } else {
                res.json({ "isFollowing" : false });
            }
        });
}

module.exports = {
    "getAllFollowing" : getAllFollowing,
    "follow" : followAccount, 
    "unfollow" : unfollowAccount,
    "isFollowing" : isFollowing
}

