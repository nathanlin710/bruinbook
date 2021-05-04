const express = require('express')
const router = express.Router()
const Account = require('../models/account');

router.get('/', (req, res) => {
    console.log(`accounts routes /`)
    res.send('Hello World!')
});

router.get('/accounts', (req, res, next) => {
    // gets account data, exposes just id and content
    console.log(`accounts`)
    Account.find({}, 'name')
        .then(data => res.json(data))
        .catch(next)
});

router.post('/account', async (req, res, next) => {
    console.log("posting");
    const account = new Account(req.body);
    account.save()
        .then(console.log("saved"))
        .then(res.send(account))
        .catch(next);
    // if (req.body.content) {
    //     Account.create(req.body)
    //         .then(data => res.json(data))
    //         .catch(next)
    // } else {
    //     res.json({
    //         error: "The input field is empty"
    //     })
    // }
});

router.delete('/account/:id', (req, res, next) => {
    Post.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;