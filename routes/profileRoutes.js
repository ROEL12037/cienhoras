const router = require('express').Router()
const { getProfilePage, getUserPage } = require('../controllers/profileControllers')
const { ensureAuth } = require('../middleware/auth')

// desc         profile page
// route        get /profile
router.get('/', ensureAuth, getProfilePage)

// desc         other user's profile
// route        get /profile/:id
router.get('/:id', ensureAuth, getUserPage)

module.exports = router