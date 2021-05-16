const Account = require('../models/account')
const bcrypt = require('bcrypt')
const saltRounds = 10

function register(req, res) {
    Account.findOne({ username: req.body.username })
        .then(user => {
            if (user) res.status(403).json({ error: 'username already taken' })
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

function login(req, res) {
    res.json(req.user)
}

function logout(req, res) {
    req.logout()
    res.send( { message: 'Successfully logged out' } )
}

function logged_in(req, res) {
    const logged_in = req.isAuthenticated()
    res.json({
        logged_in: logged_in,
        user: req.user
    })
}

module.exports = {
    register,
    login,  
    logout,
    logged_in
}
