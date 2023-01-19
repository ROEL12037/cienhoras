const router = require('express').Router()
const { ensureAuth } = require('../middleware/auth')
const { getFeedPage } = require('../controllers/feedControllers')

// desc         show all posts
// route        get /feed
router.get('/', ensureAuth, getFeedPage)

module.exports = router