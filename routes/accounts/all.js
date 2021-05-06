
const Account = require('../../models/account');

const _get = (req, res, next) => {
    console.log(`Getting Account`)
    Account.find()
        .then(data => res.json(data))
        .catch(next);
};

const _post = (req, res, next) => {
    console.log("Posting Account");
    const account = new Account(req.body);
    account.save()
        .then(res.json(account))
        .catch(next);
};

module.exports = {
    "get": _get,
    "post": _post
}