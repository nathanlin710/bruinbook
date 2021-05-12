const express = require('express')
const passport = require('passport')
const router = express.Router()
const controller = require('../controllers/auth.controller')

router.post('/register', controller.register)

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: './login',
        failureFlash: true
    })
);

router.get('/login', (req, res) => {
    try {
        console.log(req.user.email)
    } catch {
        console.log("No one is logged in")
    }
})

router.get('/logout', (req, res) => {
    req.logOut()
    console.log("logged out")
    res.redirect('./login')
})

module.exports = router