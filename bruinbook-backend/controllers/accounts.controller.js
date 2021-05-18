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

module.exports = {
    "getAll": getAllAccounts,
    "getSingle": getSingleAccount,
    "patchSingle": patchSingleAccount,
    "deleteSingle": deleteSingleAccount
}