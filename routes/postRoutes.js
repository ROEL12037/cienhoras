const router = require('express').Router()
const upload = require('../middleware/multer')
const { getAddPostPage, addPost, getEditPostPage} = require('../controllers/postControllers')
const { ensureAuth } = require('../middleware/auth')

// desc         add post page
// route        GET /post/add
router.get('/add', ensureAuth, getAddPostPage)

// desc         add post
// route        POST /post/addPost
router.post('/addPost', ensureAuth, upload.single('image'), addPost)

// desc         show edit page
// route        GET /post/edit/:id
router.get('/edit/:id', ensureAuth, getEditPostPage)


module.exports = router