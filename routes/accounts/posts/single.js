const Account = require('../../../models/account');
const Post = require('../../../models/post');

const _get = (req, res, next) => {
    Account.findById(req.params.accountId)
        .then(data => res.json(data))
        .catch(next);
};

const _patch = (req, res) => {

};

const _delete = (req, res) => {

};

module.exports = {
    "get": _get,
    "patch": _patch,
    "delete": _delete
};