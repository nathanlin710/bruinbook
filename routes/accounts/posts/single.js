const Account = require('../../../models/account');
const Post = require('../../../models/post');

const _get = (req, res, next) => {
    console.log(`Getting single Post`);
    Post.findById(req.params.postId)
        .then(data => res.json(data))
        .catch(next);

};

const _patch = (req, res, next) => {
    console.log("Updating single Post");
    Post.findByIdAndUpdate(req.params.postId, req.body, { new: true })
        .then(data => res.json(data))
        .catch(next);
};

const _delete = (req, res, next) => {
    Post.findByIdAndDelete(req.params.postId)
        .then(data => res.json(data))
        .catch(next);
};

module.exports = {
    "get": _get,
    "patch": _patch,
    "delete": _delete
};