const router = require('express').Router()
const upload = require('../middleware/multer')
const { getAddPostPage, addPost } = require('../controllers/postControllers')
const { ensureAuth } = require('../middleware/auth')

// desc         add post page
// route        GET /post/add
router.get('/add', ensureAuth, getAddPostPage)

// desc         add post
// route        POST /post/addPost
router.post('/addPost', ensureAuth, upload.single('image'), addPost)

module.exports = router