const router = require('express').Router()
const { getAddPostPage } = require('../controllers/postControllers')

// desc         add post page
// route        get /post/add
router.get('/add', getAddPostPage)

module.exports = router