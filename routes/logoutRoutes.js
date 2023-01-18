const router = require('express').Router()
const { logoutAttempt } = require('../controllers/logoutControllers')

// desc         logout attempt
// route        post /logout
router.get('/', logoutAttempt)

module.exports = router