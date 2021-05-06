const express = require('express')
const router = express.Router()
const Account = require('../models/account');

router.get('/', (req, res, next) => {
    console.log(`Getting Account`)
    Account.find()
        .then(data => res.json(data))
        .catch(next)
});

router.post('/', (req, res, next) => {
    console.log("Posting Account");
    const account = new Account(req.body);
    account.save()
        .then(res.json(account))
        .catch(next);
});

router.get('/:id', (req, res, next) => {
    console.log("Getting single Account");
    Account.findById(req.params.id)
        .then(data => res.json(data))
        .catch(next)
});

router.patch('/:id/', (req, res, next) => {
    console.log("Updating single Account");
    Account.findOneAndUpdate({"_id": req.params.id}, req.body)
        .then(data => res.json(data))
        .catch(next)
});

router.delete('/:id', (req, res, next) => {
    Account.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;