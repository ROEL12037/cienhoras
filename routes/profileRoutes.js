const router = require('express').Router()
const { getProfilePage } = require('../controllers/profileControllers')
const { ensureAuth } = require('../middleware/auth')

// desc         profile page
// route        get /profile
router.get('/', ensureAuth, getProfilePage)

module.exports = router