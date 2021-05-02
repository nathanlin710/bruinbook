const express = require('express')
const router = express.Router()
const Post = require('../models/post');

router.get('/posts', (req, res, next) => {
    // gets post data, exposes just id and content
    Post.find({}, 'content')
        .then(data => res.json(data))
        .catch(next)
});

router.post('/posts', (req, res, next) => {
    if (req.body.content) {
        Post.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
});

router.delete('/posts/:id', (req, res, next) => {
    Post.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;