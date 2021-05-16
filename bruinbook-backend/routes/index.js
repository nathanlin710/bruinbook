const express = require('express');
const router = express.Router();

const accounts = require('./accounts');
const auth = require('./auth');

router.get('/', (req, res) =>{
    res.json('Connected');
});

router.use('/auth', auth);
router.use('/accounts', accounts);

module.exports = router;