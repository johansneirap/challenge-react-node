const { Router } = require('express');
const router = Router();

const { createPost, deletePost, getPosts } = require('../controllers/post_controller');

router.post('/posts', createPost)
router.delete('/posts/:id', deletePost)
router.get('/posts', getPosts)

module.exports = router;