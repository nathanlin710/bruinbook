
const Account = require('../../models/account');

const _get = (req, res, next) => {
    console.log(`Getting Account`)
    Account.find()
        .then(data => res.json(data))
        .catch(error => next(error));
};

const _post = (req, res, next) => {
    console.log("Posting Account");
    const account = new Account(req.body);
    account.save()
        .then(data => res.status(200).json(data))
        .catch(error => next(error));
};

module.exports = {
    "get": _get,
    "post": _post
}