const Account = require('../models/account')
const bcrypt = require('bcrypt')
const saltRounds = 10

exports.register = (req, res) => {
    Account.findOne({ email: req.body.email })
        .then(user => {
            if (user) res.status(403).json({ error: 'email is already associated with an account' })
            else {
                bcrypt.hash(req.body.password, saltRounds, (error, hash) => {
                    if (error) res.status(500).json(error)
                    else {
                        req.body.password = hash
                        const newUser = new Account(req.body)
                        newUser.save()
                            .then(user => {
                                res.status(200).json(user)
                            })
                            .catch(error => {
                                res.status(500).json(error)
                            })
                    }
                })
            }
        })
}

/**
exports.login = (req, res) => {
    Account.findOne({ email: req.body.email })
        .then(user => {
            if (!user) res.status(404).json({ error: 'no user with that email found' })
            else {
                bcrypt.compare(req.body.password, user.password, (error, match) => {
                    if (error) res.status(500).json(error)
                    else if (match) res.status(200).json(match)
                    else res.status(403).json({ error: 'passwords do not match' })
                })
            }
        })
        .catch(error => { res.status(500).json(error) })
} */