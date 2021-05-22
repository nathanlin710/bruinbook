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
    console.log("Deleting single Account");
    Account.findByIdAndDelete(req.params.accountId)
        .then(data => res.status(200).json(data))
        .catch(error => next(error));
};

const feed = async (req, res, next) => {
    console.log("Getting feed of single Account");
    try {
        const account = await Account.findById(req.params.accountId).populate({
            path: 'posts',
            populate: { path : 'author', select : 'username'}
        }).populate({
            path: 'following',
            populate: {
                path : 'posts',
                populate: {path : 'author', select : 'username'}
            }
        });

        let feed = account.posts;
        account.following.forEach(acc => {
            acc.posts.forEach(post => {
                feed.push(post);
            });
        });

        feed.sort((p1, p2) => {
            return Date.parse(p2.createdAt) - Date.parse(p1.createdAt);
        });
        
        res.json(feed);
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