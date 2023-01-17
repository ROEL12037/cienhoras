const router = require('express').Router()
const { getProfilePage } = require('../controllers/profileControllers')

// desc         profile page
// route        get /profile
router.get('/', getProfilePage)

module.exports = router