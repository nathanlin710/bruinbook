const Account = require('../models/account');

const getAllAccounts = (req, res, next) => {
    console.log(`Getting Account`)
    Account.find()
        .then(data => res.json(data))
        .catch(error => next(error));
};

const getSingleAccount = (req, res, next) => {
    console.log("Getting single Account");
    Account.findById(req.params.accountId)
        .then(data => res.json(data))
        .catch(error => next(error));
};

const patchSingleAccount = (req, res, next) => {
    console.log("Updating single Account");
    Account.findByIdAndUpdate(req.params.accountId, req.body, { new: true } )
        .then(data => res.json(data))
        .catch(error => next(error));
};

const deleteSingleAccount = (req, res, next) => {
    Account.findByIdAndDelete(req.params.accountId)
        .then(data => res.status(200).json(data))
        .catch(error => next(error));
};

const feed = async (req, res, next) => {

    try {
        const account = await Account.findById(req.params.accountId).populate('posts');
        const following = account.following;
        let posts = account.posts;

        for (let i = 0; i < following.length; i++) {
            const accWithPosts = await Account.findById(following[i]).populate('posts');
            for (let j = 0; j < accWithPosts.posts.length; j++){
                posts.push(accWithPosts.posts[j]);
            }
        }
        res.json(posts);
    } catch(error) {
        next(error);
    }
}

module.exports = {
    "getAll": getAllAccounts,
    "getSingle": getSingleAccount,
    "patchSingle": patchSingleAccount,
    "deleteSingle": deleteSingleAccount,
    "feed" : feed
}