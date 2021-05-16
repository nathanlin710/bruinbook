const express = require('express')
const passport = require('passport')
const router = express.Router()
const controller = require('../controllers/auth.controller')

router.post('/register', controller.register)

router.post('/login',
    passport.authenticate('local', {
        failureFlash: true
    }),
    controller.login
)

router.get('/logout', controller.logout)

router.get('/logged_in', controller.logged_in)

module.exports = router