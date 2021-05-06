const Account = require('../../models/account');

const _get = (req, res, next) => {
    console.log("Getting single Account");
    Account.findById(req.params.id)
        .then(data => res.json(data))
        .catch(next);
};

const _patch = (req, res, next) => {
    console.log("Updating single Account");
    Account.findOneAndUpdate({"_id": req.params.id}, req.body)
        .then(data => res.json(data))
        .catch(next);
};

const _delete = (req, res, next) => {
    Account.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next);
};

module.exports = {
    "get": _get,
    "patch": _patch,
    "delete": _delete
}
