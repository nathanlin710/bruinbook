const Account = require('../../../models/account');
const Post = require('../../../models/post');

const _get = (req, res, next) => {
    console.log(`Getting all posts for account`);
    Account.findById(req.params.accountId)
        .populate('posts')
        .then(data => res.json(data.posts))
        .catch(error => next(error));
};

const _post = (req, res, next) => {
    console.log(`Posting new post for account`);
    const post = new Post(req.body);
    post.author = req.params.accountId;
    post.save()
        .then(data => Account.findByIdAndUpdate(req.params.accountId, { $push: { "posts": data._id} }))
        .then(data => res.json(data))
        .catch(error => next(error));
    
};

module.exports = {
    "get": _get,
    "post": _post
};