const router = require('express').Router()
const { getLoginPage } = require('../controllers/loginControllers')

// desc         profile page
// route        get /profile
router.get('/', getLoginPage)

module.exports = router