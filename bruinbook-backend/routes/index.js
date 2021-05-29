const express = require('express');
const router = express.Router();

const accounts = require('./accounts');
const auth = require('./auth');
const postsController = require('../controllers/posts.controller');

router.get('/', (req, res) =>{
    res.json('Connected');
});

router.use('/auth', auth);
router.use('/accounts', accounts);
router.use('/posts', postsController.getAll);

module.exports = router;