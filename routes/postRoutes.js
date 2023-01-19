const router = require('express').Router()
const { getAddPostPage } = require('../controllers/postControllers')
const { ensureAuth } = require('../middleware/auth')

// desc         add post page
// route        get /post/add
router.get('/add', ensureAuth, getAddPostPage)

module.exports = router