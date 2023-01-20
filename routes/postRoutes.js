const router = require('express').Router()
const upload = require('../middleware/multer')
const { getAddPostPage, addPost, getEditPostPage, editPost, deletePost} = require('../controllers/postControllers')
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

// desc         edit post
// route        PUT /post/edit/:id
router.put('/edit/:id', ensureAuth, upload.single('image'), editPost)

// desc         delete post
// route        DELETE /post/delete/:id
router.delete('/delete/:id', ensureAuth, deletePost)


module.exports = router